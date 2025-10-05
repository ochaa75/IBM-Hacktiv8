import React, { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [reply, setReply] = useState({});
  const [announcements, setAnnouncements] = useState([]);

  // Realtime komentar
  useEffect(() => {
    const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  // Realtime pengumuman
  useEffect(() => {
    const q = query(collection(db, "announcements"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAnnouncements(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handleComment = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    // Kirim komentar anonim / siswa
    await addDoc(collection(db, "comments"), {
      text: comment,
      createdAt: Timestamp.now(),
    });
    setComment("");
  };

  const handleReply = async (commentId) => {
    if (!reply[commentId]?.trim()) return;
    await addDoc(collection(db, "comments"), {
      text: reply[commentId],
      parentId: commentId,
      repliedBy: "anonim", // default balasan user Home
      createdAt: Timestamp.now(),
    });
    setReply({ ...reply, [commentId]: "" });
  };

  return (
    <div className="container py-4">

      {/* 📢 Pengumuman / Tugas */}
      <h1 className="text-purple fw-bold mb-3">📢 Pengumuman & Tugas</h1>
      <div className="row mb-4" style={{ maxHeight: "200px", overflowY: "auto" }}>
        {announcements.length === 0 ? (
          <p className="text-center text-secondary">Belum ada pengumuman.</p>
        ) : (
          announcements.map((a) => (
            <div key={a.id} className="col-md-6 mb-3">
              <div className="card shadow-sm h-100" style={{
                background: 'linear-gradient(135deg, #8e2de2, #4a00e0)',
                color: 'white',
                borderRadius: '1rem',
              }}>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{a.title}</h5>
                  <p className="card-text">{a.content}</p>
                  {a.fileUrl && (
                    <a href={a.fileUrl} target="_blank" rel="noopener noreferrer"
                       className="btn btn-light btn-sm mt-2 text-purple fw-bold"
                       style={{ borderRadius: '1rem' }}>
                      Lihat / Unduh Tugas
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 💬 Form Kirim Komentar */}
      <div className="card mb-4 shadow-sm" style={{ borderRadius: '1rem' }}>
        <div className="card-body">
          <h2 className="card-title mb-3 fw-bold text-purple">Tulis Pertanyaan / Komentar</h2>
          <form onSubmit={handleComment} className="d-flex gap-2">
            <input type="text" placeholder="Tulis sesuatu..." className="form-control"
                   style={{ borderRadius: '1rem', borderColor: '#8e2de2' }}
                   value={comment} onChange={(e) => setComment(e.target.value)} />
            <button type="submit" className="btn text-white fw-bold" style={{
              background: 'linear-gradient(135deg, #8e2de2, #4a00e0)',
              borderRadius: '1rem',
            }}>Kirim</button>
          </form>
        </div>
      </div>

      {/* 🗨️ Komentar Scrollable */}
      <div className="card shadow-sm mb-4" style={{ maxHeight: "400px", overflowY: "auto", borderRadius: '1rem' }}>
        <div className="card-body">
          {comments.filter(c => !c.parentId).map(c => (
            <div key={c.id} className="mb-3 pb-2">
              <p className="fw-bold mb-1" style={{ color: '#4a00e0' }}>
                {c.repliedBy === "admin" ? "Admin" : "Question"}: {c.text}
              </p>

              {/* Balasan */}
              {comments.filter(r => r.parentId === c.id).map(r => (
                <p key={r.id} className="ms-3 p-2 rounded"
                   style={{
                     backgroundColor: r.repliedBy === "admin" ? '#8e2de2' : '#d6bcfa',
                     color: r.repliedBy === "admin" ? 'white' : '#4a00e0',
                   }}>
                  ↳ {r.repliedBy || "anonim"}: {r.text}
                </p>
              ))}

              {/* Input balas */}
              <div className="d-flex gap-2 mt-2">
                <input type="text" placeholder="Balas komentar..." className="form-control"
                       style={{ borderRadius: '1rem', borderColor: '#8e2de2' }}
                       value={reply[c.id] || ""} onChange={(e) => setReply({ ...reply, [c.id]: e.target.value })} />
                <button onClick={() => handleReply(c.id)}
                        className="btn text-white fw-bold"
                        style={{
                          background: 'linear-gradient(135deg, #8e2de2, #4a00e0)',
                          borderRadius: '1rem',
                        }}>Balas
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
