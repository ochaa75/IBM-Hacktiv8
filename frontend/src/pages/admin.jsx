import React, { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  Timestamp,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const [comments, setComments] = useState([]);
  const [reply, setReply] = useState({});
  const [editAnnId, setEditAnnId] = useState(null);
  const [editAnnTitle, setEditAnnTitle] = useState("");
  const [editAnnContent, setEditAnnContent] = useState("");

  const ADMIN_USERNAME = "ocha";
  const ADMIN_PASSWORD = "12345";

  // Realtime pengumuman
  useEffect(() => {
    const q = query(collection(db, "announcements"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAnnouncements(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  // Realtime komentar
  useEffect(() => {
    const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) setLoggedIn(true);
    else alert("Username atau password salah!");
  };

  const handlePostAnnouncement = async (e) => {
    e.preventDefault();
    if (editAnnId) {
      const docRef = doc(db, "announcements", editAnnId);
      await updateDoc(docRef, { title: editAnnTitle, content: editAnnContent });
      setEditAnnId(null); setEditAnnTitle(""); setEditAnnContent("");
    } else {
      await addDoc(collection(db, "announcements"), { title, content, createdAt: Timestamp.now() });
    }
    setTitle(""); setContent("");
  };

  const handleEditAnnouncement = (ann) => {
    setEditAnnId(ann.id); setEditAnnTitle(ann.title); setEditAnnContent(ann.content);
  };

  const handleDeleteAnnouncement = async (id) => {
    if (!confirm("Yakin ingin menghapus pengumuman ini?")) return;
    await deleteDoc(doc(db, "announcements", id));
  };

  const handleDeleteComment = async (id) => {
    if (!confirm("Yakin ingin menghapus komentar ini?")) return;
    await deleteDoc(doc(db, "comments", id));
  };

  if (!loggedIn) {
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center" style={{ background: "linear-gradient(135deg, #8e2de2, #4a00e0)" }}>
        <form onSubmit={handleLogin} className="bg-white p-5 rounded-3 shadow" style={{ width: '350px' }}>
          <h2 className="text-center fw-bold text-purple mb-4">Admin Login</h2>
          <input type="text" placeholder="Username" className="form-control mb-2" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" className="form-control mb-3" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="btn text-white w-100 fw-bold" style={{ background: 'linear-gradient(135deg, #8e2de2, #4a00e0)' }}>Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="container py-4">

      {/* Form Pengumuman */}
      <h1 className="text-purple fw-bold mb-3">📢 Dashboard Admin</h1>
      <div className="card mb-4 shadow-sm p-3" style={{ borderRadius: '1rem', background: 'white' }}>
        <h2 className="fw-bold text-purple mb-3">Input Pengumuman / Tugas</h2>
        <form onSubmit={handlePostAnnouncement} className="d-flex flex-column gap-2">
          <input type="text" placeholder="Judul Pengumuman / Tugas" className="form-control" value={editAnnId ? editAnnTitle : title} onChange={(e) => editAnnId ? setEditAnnTitle(e.target.value) : setTitle(e.target.value)} />
          <textarea placeholder="Isi pengumuman..." className="form-control" value={editAnnId ? editAnnContent : content} onChange={(e) => editAnnId ? setEditAnnContent(e.target.value) : setContent(e.target.value)} />
          <button type="submit" className="btn text-white fw-bold" style={{ background: 'linear-gradient(135deg, #8e2de2, #4a00e0)' }}>{editAnnId ? "Update" : "Kirim"}</button>
        </form>
      </div>

      {/* Pengumuman scrollable 2 kolom */}
      <div className="row mb-4" style={{ maxHeight: "300px", overflowY: "auto" }}>
        {announcements.map((a) => (
          <div key={a.id} className="col-md-6 mb-3">
            <div className="card shadow-sm h-100" style={{ background: 'linear-gradient(135deg, #8e2de2, #4a00e0)', color: 'white', borderRadius: '1rem' }}>
              <div className="card-body">
                <h5 className="fw-bold">{a.title}</h5>
                <p>{a.content}</p>
                <div className="d-flex gap-2 mt-2">
                  <button onClick={() => handleEditAnnouncement(a)} className="btn btn-warning btn-sm">Edit</button>
                  <button onClick={() => handleDeleteAnnouncement(a.id)} className="btn btn-danger btn-sm">Hapus</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Judul & input komentar tetap di atas */}
      <div className="mb-2">
        <h2 className="fw-bold text-purple mb-2">Komentar</h2>
        <div className="d-flex gap-2 mb-3">
          <input type="text" placeholder="Tulis komentar baru..." className="form-control" value={reply["newAdmin"] || ""} onChange={(e) => setReply({ ...reply, ["newAdmin"]: e.target.value })} />
          <button onClick={async () => {
            if (!reply["newAdmin"]?.trim()) return;
            await addDoc(collection(db, "comments"), { text: reply["newAdmin"], repliedBy: "admin", createdAt: Timestamp.now() });
            setReply({ ...reply, ["newAdmin"]: "" });
          }} className="btn text-white fw-bold" style={{ background: 'linear-gradient(135deg, #8e2de2, #4a00e0)' }}>Kirim</button>
        </div>
      </div>

      {/* Komentar scrollable */}
      <div className="card shadow-sm" style={{ maxHeight: "400px", overflowY: "auto", borderRadius: '1rem', padding: '1rem' }}>
        {comments.filter(c => !c.parentId).map(c => (
          <div key={c.id} className="mb-3 pb-2 border-bottom">
            <p className="fw-bold mb-1" style={{ color: '#4a00e0' }}>
              {c.repliedBy === "admin" ? "Admin" : "Question"}: {c.text}
            </p>

            {/* Balasan komentar */}
            {comments.filter(r => r.parentId === c.id).map(r => (
              <p key={r.id} className="ms-3 p-2 rounded" style={{ backgroundColor: r.repliedBy === "admin" ? '#8e2de2' : '#d6bcfa', color: r.repliedBy === "admin" ? 'white' : '#4a00e0' }}>
                ↳ {r.repliedBy || "anonim"}: {r.text}
              </p>
            ))}

            {/* Input balas & hapus selalu muncul */}
            <div className="d-flex gap-2 mt-2">
              <input type="text" placeholder="Balas komentar..." className="form-control" value={reply[c.id] || ""} onChange={(e) => setReply({ ...reply, [c.id]: e.target.value })} />
              <button onClick={async () => {
                if (!reply[c.id]?.trim()) return;
                await addDoc(collection(db, "comments"), { text: reply[c.id], parentId: c.id, repliedBy: "admin", createdAt: Timestamp.now() });
                setReply({ ...reply, [c.id]: "" });
              }} className="btn text-white fw-bold" style={{ background: 'linear-gradient(135deg, #8e2de2, #4a00e0)' }}>Balas</button>
              <button onClick={() => handleDeleteComment(c.id)} className="btn btn-danger btn-sm">Hapus</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
