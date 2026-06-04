import React, { useState, useEffect } from 'react';

export default function BirthdayWishlist() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [viewMode, setViewMode] = useState('guest');
  const [items, setItems] = useState([
    { id: 1, name: 'iPhone 16 Pro', description: 'For better photos and design work', image: 'https://images.unsplash.com/photo-1592286927505-1fed6c3d8eaa?w=400&h=300&fit=crop', claimed: false },
    { id: 2, name: 'Sony WH-1000XM5 Headphones', description: 'Premium noise-cancelling', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop', claimed: false },
    { id: 3, name: 'Leather Journal Set', description: 'For creative thoughts & ideas', image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=300&fit=crop', claimed: false },
    { id: 4, name: 'Coffee Table Book', description: 'Design inspiration', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop', claimed: false },
    { id: 5, name: 'Luxury Candle Set', description: 'Scented for cozy vibes', image: 'https://images.unsplash.com/photo-1602874801007-a1c1c0e7e2a9?w=400&h=300&fit=crop', claimed: false },
    { id: 6, name: 'Designer Tote Bag', description: 'Chic & functional', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=300&fit=crop', claimed: false },
    { id: 7, name: 'Gold Jewelry Set', description: 'Delicate & elegant pieces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop', claimed: false },
    { id: 8, name: 'Skincare Bundle', description: 'Premium beauty products', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop', claimed: false },
    { id: 9, name: 'Art Supply Set', description: 'For creative projects', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop', claimed: false },
    { id: 10, name: 'Camera Lens', description: 'Better photography', image: 'https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=400&h=300&fit=crop', claimed: false },
    { id: 11, name: 'Luxury Perfume', description: 'Signature scent', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop', claimed: false },
    { id: 12, name: 'Money/Gift Card', description: 'For whatever I want!', image: 'https://images.unsplash.com/photo-1574863136924-f6e50a3a3c7f?w=400&h=300&fit=crop', claimed: false },
  ]);
  const [formData, setFormData] = useState({ name: '', description: '', image: '' });

  useEffect(() => {
    const saved = localStorage.getItem('wishlistItems');
    if (saved) setItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(items));
  }, [items]);

  const toggleItemClaimed = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, claimed: !item.claimed } : item
    ));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const addItem = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description || !formData.image) return;
    
    const newItem = {
      id: Math.max(...items.map(i => i.id), 0) + 1,
      ...formData,
      claimed: false,
    };
    setItems([...items, newItem]);
    setFormData({ name: '', description: '', image: '' });
  };

  const styles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Comic Sans MS', 'Trebuchet MS', sans-serif;
      background: linear-gradient(135deg, #f8f3ff 0%, #ffe4f0 100%);
      min-height: 100vh;
    }
    
    @keyframes float {
      0%, 100% { transform: rotate(0deg) translateY(0px); }
      50% { transform: rotate(2deg) translateY(-8px); }
    }
    
    .floating { animation: float 3s ease-in-out infinite; }
    .floating-delay { animation: float 3s ease-in-out infinite 0.5s; }
    
    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }
    
    .landing {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 2rem 1rem;
    }
    
    .landing-content {
      max-width: 700px;
      text-align: center;
    }
    
    h1 {
      font-size: 48px;
      font-weight: 900;
      color: #534AB7;
      margin-bottom: 1rem;
      letter-spacing: -1px;
    }
    
    h2 {
      font-size: 18px;
      font-weight: 900;
      color: #534AB7;
      margin-bottom: 1rem;
    }
    
    .header-text {
      font-size: 20px;
      color: #7F77DD;
      font-weight: 600;
      margin-bottom: 2rem;
    }
    
    .message-box {
      background: white;
      border: 4px solid #534AB7;
      border-radius: 20px;
      padding: 2rem;
      margin-bottom: 2rem;
      position: relative;
      transform: rotate(-1deg);
      box-shadow: 0 8px 0px rgba(83, 74, 183, 0.2);
    }
    
    .message-box p {
      font-size: 16px;
      color: #333;
      line-height: 1.8;
      margin-bottom: 1.5rem;
    }
    
    .info-box {
      background: #EEEDFE;
      border: 3px solid #AFA9EC;
      border-radius: 12px;
      padding: 1rem;
      margin-bottom: 12px;
      text-align: left;
      transform: rotate(0.5deg);
    }
    
    .info-box.pink {
      background: #FFE4F0;
      border: 3px solid #FFB6D9;
      transform: rotate(-0.5deg);
    }
    
    .info-box p {
      margin: 0;
      font-size: 14px;
      font-weight: 600;
    }
    
    .info-box.pink p { color: #C91E63; }
    .info-box p { color: #534AB7; }
    
    .info-box-sub {
      font-size: 13px !important;
      font-weight: 500 !important;
      margin-top: 4px !important;
    }
    
    .btn {
      font-family: 'Comic Sans MS', 'Trebuchet MS', sans-serif;
      border-radius: 12px;
      border: none;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
    }
    
    .btn-primary {
      padding: 16px 40px;
      background: linear-gradient(135deg, #7F77DD 0%, #534AB7 100%);
      border: 4px solid #3C3489;
      color: white;
      font-size: 18px;
      transform: rotate(2deg);
      box-shadow: 6px 6px 0px rgba(83, 74, 183, 0.3);
    }
    
    .btn-primary:hover {
      transform: rotate(2deg) scale(1.05);
    }
    
    .btn-secondary {
      padding: 12px 20px;
      background: #FFB6D9;
      border: 3px solid #C91E63;
      color: #C91E63;
      font-size: 13px;
    }
    
    .btn-back {
      padding: 10px 18px;
      background: white;
      border: 3px solid #7F77DD;
      color: #7F77DD;
      font-size: 14px;
      margin-bottom: 12px;
    }
    
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 3rem;
      gap: 1rem;
      flex-wrap: wrap;
    }
    
    .header-title {
      position: relative;
    }
    
    .header-title h1 {
      margin-bottom: 8px;
    }
    
    .header-title p {
      margin: 0;
      color: #7F77DD;
      font-size: 16px;
      font-weight: 600;
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }
    
    .item-card {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      transform: rotate(-2deg);
      transition: all 0.3s;
      cursor: pointer;
      box-shadow: -8px 10px 0px rgba(83, 74, 183, 0.25);
      position: relative;
    }
    
    .item-card:nth-child(even) {
      transform: rotate(2deg);
      box-shadow: 8px 10px 0px rgba(255, 182, 217, 0.25);
    }
    
    .item-card:nth-child(3n) {
      border: 4px solid #AFA9EC;
    }
    
    .item-card:nth-child(3n+1) {
      border: 4px solid #534AB7;
    }
    
    .item-card:nth-child(3n+2) {
      border: 4px solid #FFB6D9;
    }
    
    .item-image {
      position: relative;
      width: 100%;
      padding-bottom: 75%;
      background: linear-gradient(135deg, #EEEDFE 0%, #FFE4F0 100%);
      overflow: hidden;
    }
    
    .item-image img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .delete-btn {
      position: absolute;
      top: 8px;
      right: 8px;
      background: #FFB6D9;
      color: #C91E63;
      border: 3px solid #C91E63;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 20px;
      font-weight: 900;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.2s;
      z-index: 10;
    }
    
    .item-card:hover .delete-btn {
      opacity: 1;
    }
    
    .item-content {
      padding: 1.5rem;
    }
    
    .item-content h3 {
      margin: 0 0 8px 0;
      font-size: 16px;
      font-weight: 900;
      color: #534AB7;
      line-height: 1.3;
    }
    
    .item-content p {
      margin: 0 0 16px 0;
      font-size: 13px;
      color: #666;
      line-height: 1.5;
      font-weight: 500;
    }
    
    .item-btn {
      width: 100%;
      padding: 13px;
      background: linear-gradient(135deg, #FFB6D9 0%, #FF89C8 100%);
      border: 3px solid #C91E63;
      border-radius: 10px;
      color: white;
      font-size: 14px;
      font-weight: 900;
      cursor: pointer;
      font-family: 'Comic Sans MS', 'Trebuchet MS', sans-serif;
      letter-spacing: 0.5px;
      box-shadow: 0 4px 0px rgba(201, 30, 99, 0.2);
    }
    
    .claimed-btn {
      width: 100%;
      padding: 12px;
      background: linear-gradient(135deg, #C8E6C9 0%, #A5D6A7 100%);
      border: 3px solid #4CAF50;
      border-radius: 10px;
      color: #1B5E20;
      font-size: 13px;
      font-weight: 900;
      text-align: center;
      letter-spacing: 0.5px;
    }
    
    .stats {
      text-align: center;
      padding: 2.5rem 1.5rem;
      background: white;
      border: 4px dashed #FFB6D9;
      border-radius: 16px;
      transform: rotate(-1deg);
      position: relative;
      box-shadow: 0 8px 0px rgba(255, 182, 217, 0.15);
    }
    
    .stats p {
      margin: 0;
      color: #534AB7;
      font-size: 18px;
      font-weight: 900;
      letter-spacing: 1px;
    }
    
    .form-section {
      background: white;
      border: 4px solid #534AB7;
      border-radius: 16px;
      padding: 1.5rem;
      margin-bottom: 2rem;
      position: relative;
      transform: rotate(-1deg);
      box-shadow: 0 6px 0px rgba(83, 74, 183, 0.15);
    }
    
    .form-section input,
    .form-section textarea {
      width: 100%;
      padding: 12px;
      border: 3px solid #AFA9EC;
      border-radius: 10px;
      font-size: 14px;
      font-family: 'Comic Sans MS', 'Trebuchet MS', sans-serif;
      font-weight: 600;
      margin-bottom: 12px;
    }
    
    .form-section textarea {
      resize: vertical;
      min-height: 70px;
    }
    
    .form-section button {
      width: 100%;
      padding: 12px;
      background: linear-gradient(135deg, #FFB6D9 0%, #FF89C8 100%);
      border: 3px solid #C91E63;
      border-radius: 10px;
      color: white;
      font-weight: 900;
      cursor: pointer;
      font-size: 14px;
      font-family: 'Comic Sans MS', 'Trebuchet MS', sans-serif;
    }
    
    .emoji {
      font-size: 32px;
      display: inline-block;
    }
    
    .bow {
      font-size: 32px;
    }
  `;

  if (currentPage === 'landing') {
    return (
      <div style={{ background: 'linear-gradient(135deg, #f8f3ff 0%, #ffe4f0 100%)', minHeight: '100vh' }}>
        <style>{styles}</style>
        <div className="landing">
          <div className="landing-content">
            <div style={{ marginBottom: '3rem', position: 'relative' }}>
              <div style={{ fontSize: '32px', marginBottom: '1rem' }}>🎉</div>
              <h1>hi bestie!</h1>
              <p className="header-text">i made a wishlist just for my birthday 💕</p>
            </div>

            <div className="message-box">
              <p>picking anything from this list would literally make me SO happy. honestly, anything you choose will make my day feel extra special ✨</p>
              
              <div className="info-box">
                <p>🕵️ it's anonymous</p>
                <p className="info-box-sub">i won't know who got what — pure mystery vibes!</p>
              </div>
              
              <div className="info-box pink">
                <p>💝 just claim what you're getting</p>
                <p className="info-box-sub">so others don't pick the same thing</p>
              </div>

              <p style={{ marginTop: '1.5rem', fontSize: '13px', color: '#999', fontStyle: 'italic' }}>
                thank you so much for being here & making this day special 💫
              </p>
            </div>

            <button 
              className="btn btn-primary"
              onClick={() => setCurrentPage('wishlist')}
            >
              let's gooo! 🎁
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: 'linear-gradient(135deg, #f8f3ff 0%, #ffe4f0 100%)', minHeight: '100vh' }}>
      <style>{styles}</style>
      
      <div style={{ position: 'fixed', top: '2%', left: '5%', fontSize: '36px', opacity: 0.3, pointerEvents: 'none' }} className="floating">🎀</div>
      <div style={{ position: 'fixed', top: '15%', right: '3%', fontSize: '32px', opacity: 0.3, pointerEvents: 'none' }} className="floating floating-delay">💕</div>
      <div style={{ position: 'fixed', bottom: '20%', left: '2%', fontSize: '40px', opacity: 0.2, pointerEvents: 'none' }} className="floating">✨</div>
      <div style={{ position: 'fixed', bottom: '10%', right: '4%', fontSize: '28px', opacity: 0.3, pointerEvents: 'none' }} className="floating floating-delay">🎁</div>

      <div className="container">
        <div className="header">
          <div>
            <button 
              className="btn btn-back"
              onClick={() => setCurrentPage('landing')}
            >
              ← back
            </button>
            <div className="header-title">
              <h1>my wishlist</h1>
              <p>pick something & make me happy! 💕</p>
            </div>
          </div>
          <button 
            className="btn btn-secondary"
            onClick={() => setViewMode(viewMode === 'guest' ? 'admin' : 'guest')}
          >
            🔐 {viewMode === 'admin' ? 'guest' : 'admin'}
          </button>
        </div>

        {viewMode === 'admin' && (
          <div className="form-section">
            <h2>✨ add new item</h2>
            <form onSubmit={addItem}>
              <input 
                type="text" 
                placeholder="what's the item?" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <textarea 
                placeholder="why do you want it?" 
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                required
              />
              <input 
                type="url" 
                placeholder="paste image url" 
                value={formData.image}
                onChange={(e) => setFormData({...formData, image: e.target.value})}
                required
              />
              <button type="submit">add to list! 💝</button>
            </form>
          </div>
        )}

        <div className="grid">
          {items.map((item) => (
            <div key={item.id} className="item-card">
              <div className="item-image">
                <img src={item.image} alt={item.name} onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1549887534-7e9a0b637e3a?w=400&h=300&fit=crop'} />
                {viewMode === 'admin' && (
                  <button 
                    className="delete-btn"
                    onClick={() => deleteItem(item.id)}
                  >
                    ×
                  </button>
                )}
              </div>
              <div className="item-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                {item.claimed ? (
                  <div className="claimed-btn">✓ someone's getting it!</div>
                ) : (
                  <button 
                    className="item-btn"
                    onClick={() => toggleItemClaimed(item.id)}
                  >
                    💝 i'm getting this!
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="stats">
          <div style={{ position: 'absolute', top: '-18px', left: '35px', fontSize: '32px' }} className="floating">🎀</div>
          <div style={{ position: 'absolute', top: '-16px', right: '50px', fontSize: '28px' }} className="floating floating-delay">✨</div>
          <p>{items.length} things i want • {items.filter(i => i.claimed).length} claimed 💕</p>
        </div>
      </div>
    </div>
  );
}
