import React, { useState } from "react";
import {
  Search, Menu, X, Star, MapPin, Users, BedDouble,
  CalendarDays, ArrowLeft, CheckCircle, Leaf,
  Wifi, Coffee, Waves, Mountain, ArrowRight
} from "lucide-react";
import "./App.css";

const photo = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=85`;

const roomData = [
  ["Forest View Deluxe","Deluxe",12500,2,"photo-1611892440504-42a792e24d32"],
  ["Garden Luxury Suite","Luxury",22000,2,"photo-1618221195710-dd6b41faaea6"],
  ["Mountain Escape Room","Mountain",15500,3,"photo-1510798831971-661eb04b3739"],
  ["Tropical Paradise Villa","Villa",28000,4,"photo-1613977257363-707ba9348227"],
  ["Green Valley Room","Nature",13500,2,"photo-1615874959474-d609969a20ed"],
  ["Royal Garden Suite","Luxury",25000,3,"photo-1600210492486-724fe5c67fb0"],
  ["Pine Forest Cottage","Cottage",14500,2,"photo-1449158743715-0a90ebb6d2d8"],
  ["Lake View Retreat","Lake View",19000,2,"photo-1505693416388-ac5ce068fe85"],
  ["Palm Tree Villa","Villa",27000,4,"photo-1600607687939-ce8a6c25118c"],
  ["Eco Nature Suite","Nature",16000,2,"photo-1600566753086-00f18fb6b3ea"],
  ["Sunrise Deluxe Room","Deluxe",11500,2,"photo-1616486338812-3dadae4b4ace"],
  ["Rainforest Premium","Nature",18500,3,"photo-1600607687920-4e2a09cf159d"],
  ["Royal Mountain Suite","Mountain",26000,3,"photo-1600607687644-c7171b42498f"],
  ["Blue Lagoon Room","Lake View",17500,2,"photo-1600566753190-17f0baa2a6c3"],
  ["Honeymoon Garden Suite","Luxury",30000,2,"photo-1617104678098-de229db51175"],
  ["Woodland Cottage","Cottage",14000,2,"photo-1615874694520-474822394e73"],
  ["Green Meadow Room","Nature",13000,2,"photo-1600210491369-e753d80a41f3"],
  ["Hilltop Panorama Suite","Mountain",23500,3,"photo-1600607687939-ce8a6c25118c"],
  ["Orchid Luxury Room","Luxury",21000,2,"photo-1600566752355-35792bedcfea"],
  ["Bamboo Garden Villa","Villa",24500,4,"photo-1600607688969-a5bfcd646154"],
  ["River Side Deluxe","Lake View",16500,2,"photo-1600607687920-4e2a09cf159d"],
  ["Wildflower Cottage","Cottage",15000,2,"photo-1616486029423-aaa4789e8c9a"],
  ["Evergreen Suite","Nature",19500,3,"photo-1600607687939-ce8a6c25118c"],
  ["Golden Sunset Room","Deluxe",14500,2,"photo-1600210492486-724fe5c67fb0"],
  ["Cedar Wood Villa","Villa",29000,4,"photo-1600607687920-4e2a09cf159d"],
  ["Alpine Comfort Room","Mountain",17500,2,"photo-1616486338812-3dadae4b4ace"],
  ["Botanical Garden Suite","Luxury",22500,3,"photo-1600566753190-17f0baa2a6c3"],
  ["Whispering Pines Room","Cottage",15500,2,"photo-1600607687939-ce8a6c25118c"],
  ["Serene Lake Villa","Villa",31000,4,"photo-1600607688969-a5bfcd646154"],
  ["Jungle View Deluxe","Nature",18000,2,"photo-1618220179428-22790b461013"],
  ["Misty Mountain Room","Mountain",16500,2,"photo-1617104678098-de229db51175"],
  ["Olive Garden Suite","Luxury",24000,3,"photo-1600210491369-e753d80a41f3"],
  ["Lotus Pond Cottage","Cottage",17000,2,"photo-1615874694520-474822394e73"],
  ["Palm Grove Deluxe","Deluxe",15500,2,"photo-1600566753086-00f18fb6b3ea"],
  ["Forest Canopy Villa","Villa",32000,4,"photo-1600607687644-c7171b42498f"],
  ["Meadow Breeze Room","Nature",14500,2,"photo-1616486029423-aaa4789e8c9a"],
  ["Crystal Lake Suite","Lake View",23000,3,"photo-1600566752355-35792bedcfea"],
  ["Hill Garden Cottage","Cottage",16000,2,"photo-1615874959474-d609969a20ed"],
  ["Royal Forest Room","Luxury",26500,3,"photo-1600210492486-724fe5c67fb0"],
  ["Wild Orchid Villa","Villa",29500,4,"photo-1600607687920-4e2a09cf159d"],
  ["Cloud Nine Mountain","Mountain",20500,2,"photo-1600607687939-ce8a6c25118c"],
  ["Fern Garden Room","Nature",13500,2,"photo-1616486338812-3dadae4b4ace"],
  ["Silver Lake Deluxe","Lake View",18500,2,"photo-1600566753190-17f0baa2a6c3"],
  ["The Greenhouse Suite","Luxury",25500,3,"photo-1618221195710-dd6b41faaea6"],
  ["Coconut Beach Villa","Villa",33000,4,"photo-1600607688969-a5bfcd646154"],
  ["Maple Forest Cottage","Cottage",17500,2,"photo-1615874694520-474822394e73"],
  ["Lavender Hill Room","Mountain",19000,2,"photo-1617104678098-de229db51175"],
  ["Secret Garden Deluxe","Deluxe",15000,2,"photo-1600210491369-e753d80a41f3"],
  ["Paradise Pool Villa","Villa",35000,4,"photo-1600607687644-c7171b42498f"],
  ["Peaceful Valley Suite","Nature",21500,3,"photo-1600566753086-00f18fb6b3ea"]
];

const rooms = roomData.map((r, i) => ({
  id: i + 1,
  name: r[0],
  category: r[1],
  price: r[2],
  guests: r[3],
  image: photo(r[4]),
  rating: (4.5 + ((i % 5) * 0.1)).toFixed(1),
  description:
    "Enjoy a peaceful stay surrounded by beautiful scenery, comfortable interiors and thoughtful hospitality.",
  amenities: ["Free Wi-Fi", "Breakfast", "Air Conditioning", "Room Service"]
}));

const money = (n) => "Rs. " + Number(n).toLocaleString("en-PK");

export default function App() {
  const [page, setPage] = useState("home");
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [booking, setBooking] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    name: "", email: "", phone: "", checkIn: "",
    checkOut: "", guests: "2"
  });
  const [login, setLogin] = useState({
    email: "", password: ""
  });

  const categories = ["All", ...new Set(rooms.map(r => r.category))];

  const filteredRooms = rooms.filter(room =>
    (category === "All" || room.category === category) &&
    room.name.toLowerCase().includes(search.toLowerCase())
  );

  function go(next) {
    setPage(next);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openRoom(room) {
    setSelected(room);
    go("detail");
  }

  function startBooking(room) {
    setSelected(room);
    go("booking");
  }

  function submitBooking(e) {
    e.preventDefault();

    if (bookingForm.checkOut <= bookingForm.checkIn) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    setBooking({
      ...bookingForm,
      room: selected.name,
      price: selected.price,
      reference: "DS" + Date.now().toString().slice(-7)
    });

    go("confirmation");
  }

  function submitLogin(e) {
    e.preventDefault();
    alert("Demo login successful!");
    go("home");
  }

  return (
    <div className="app">

      <div className="top-strip">
        <Leaf size={15} /> FIND YOUR PEACE IN NATURE · DREAMSTAY
      </div>

      <header className="header">
        <button className="brand" onClick={() => go("home")}>
          <span className="brand-icon"><Leaf size={23} /></span>
          <span>DreamStay<small>HOTELS & RESORTS</small></span>
        </button>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <button onClick={() => go("home")}>Home</button>
          <button onClick={() => go("home")}>Our Rooms</button>
          <button onClick={() => go("login")}>Login</button>
          <button className="nav-book" onClick={() => go("home")}>
            Explore Stays
          </button>
        </nav>
      </header>

      {page === "home" && (
        <>
          <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <span className="eyebrow"><Leaf size={16}/> ESCAPE INTO NATURE</span>
              <h1>Find Your Perfect<br /><em>Dream Stay.</em></h1>
              <p>
                Discover peaceful rooms, beautiful gardens and unforgettable
                moments surrounded by nature.
              </p>
              <button className="primary-btn" onClick={() =>
                document.getElementById("rooms")?.scrollIntoView({behavior:"smooth"})
              }>
                Explore Our Rooms <ArrowRight size={18}/>
              </button>
            </div>

            <div className="hero-note">
              <span>50+</span>
              <p>Beautiful rooms<br/>to discover</p>
            </div>
          </section>

          <section className="search-panel">
            <div className="search-field">
              <Search />
              <div>
                <label>Find your room</label>
                <input
                  placeholder="Search room name..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
            </div>
            <button className="search-btn" onClick={() =>
              document.getElementById("rooms")?.scrollIntoView({behavior:"smooth"})
            }>
              Search Rooms
            </button>
          </section>

          <section className="intro-section">
            <div className="intro-image">
              <img src={photo("photo-1449158743715-0a90ebb6d2d8")} alt="Nature resort"/>
            </div>
            <div className="intro-text">
              <span className="section-label">WELCOME TO DREAMSTAY</span>
              <h2>A little closer to nature,<br/>a lot closer to peace.</h2>
              <p>
                Take a break from busy life. Enjoy relaxing rooms, green
                landscapes, fresh air and warm hospitality at DreamStay.
              </p>
              <div className="intro-points">
                <span><Leaf/> Beautiful green spaces</span>
                <span><Waves/> Peaceful surroundings</span>
                <span><Coffee/> Comfortable hospitality</span>
              </div>
            </div>
          </section>

          <section className="rooms-section" id="rooms">
            <div className="section-heading">
              <span className="section-label">STAY YOUR WAY</span>
              <h2>Explore Our Beautiful Rooms</h2>
              <p>Choose the perfect place for your next peaceful escape.</p>
            </div>

            <div className="category-list">
              {categories.map(c => (
                <button
                  key={c}
                  className={category === c ? "active" : ""}
                  onClick={() => setCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="room-grid">
              {filteredRooms.map(room => (
                <article className="room-card" key={room.id}>
                  <button className="room-photo" onClick={() => openRoom(room)}>
                    <img src={room.image} alt={room.name}
                      loading="lazy"
                      onError={e => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = photo("photo-1611892440504-42a792e24d32");
                      }}
                    />
                    <span className="room-tag">{room.category}</span>
                  </button>

                  <div className="room-info">
                    <div className="room-rating">
                      <Star size={15} fill="currentColor"/> {room.rating}
                      <span>Excellent stay</span>
                    </div>
                    <h3>{room.name}</h3>
                    <div className="room-meta">
                      <span><Users size={15}/> {room.guests} Guests</span>
                      <span><BedDouble size={15}/> Comfortable</span>
                    </div>
                    <div className="room-bottom">
                      <div>
                        <strong>{money(room.price)}</strong>
                        <small>/ night</small>
                      </div>
                      <button onClick={() => openRoom(room)}>View Room</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredRooms.length === 0 && (
              <p className="no-results">No rooms found. Try another search.</p>
            )}
          </section>

          <section className="nature-banner">
            <div>
              <span className="section-label">BREATHE · RELAX · RECONNECT</span>
              <h2>Your peaceful escape<br/>is waiting for you.</h2>
              <button className="light-btn" onClick={() =>
                document.getElementById("rooms")?.scrollIntoView({behavior:"smooth"})
              }>
                Find a Room <ArrowRight size={17}/>
              </button>
            </div>
          </section>

          <section className="features">
            <div><Leaf/><h3>Nature & Greenery</h3><p>Beautiful gardens and peaceful views.</p></div>
            <div><Wifi/><h3>Modern Comfort</h3><p>Comfortable rooms with modern amenities.</p></div>
            <div><Coffee/><h3>Warm Hospitality</h3><p>Relax and enjoy a welcoming stay.</p></div>
            <div><Mountain/><h3>Beautiful Views</h3><p>Discover wonderful places to unwind.</p></div>
          </section>
        </>
      )}

      {page === "detail" && selected && (
        <main className="inner-page">
          <button className="back-btn" onClick={() => go("home")}>
            <ArrowLeft size={17}/> Back to rooms
          </button>
          <div className="detail-layout">
            <img className="detail-photo" src={selected.image} alt={selected.name}/>
            <div className="detail-content">
              <span className="section-label">{selected.category} ROOM</span>
              <h1>{selected.name}</h1>
              <div className="detail-rating"><Star fill="currentColor"/> {selected.rating} Guest Rating</div>
              <h2>{money(selected.price)} <small>/ night</small></h2>
              <p>{selected.description}</p>
              <p><Users size={17}/> Up to {selected.guests} guests</p>
              <h3>Room Amenities</h3>
              <div className="amenities">
                {selected.amenities.map(a => <span key={a}><CheckCircle size={15}/>{a}</span>)}
              </div>
              <button className="primary-btn" onClick={() => startBooking(selected)}>
                Book This Room <ArrowRight size={18}/>
              </button>
            </div>
          </div>
        </main>
      )}

      {page === "login" && (
        <section className="login-page">
          <div className="login-background"></div>
          <form className="login-card" onSubmit={submitLogin}>
            <span className="section-label">WELCOME TO DREAMSTAY</span>
            <div className="login-leaf"><Leaf size={30}/></div>
            <h1>Welcome Back</h1>
            <p>Login to continue your peaceful journey.</p>

            <label>Email Address</label>
            <input type="email" required placeholder="Enter your email"
              value={login.email}
              onChange={e => setLogin({...login,email:e.target.value})}/>

            <label>Password</label>
            <input type="password" required minLength="4"
              placeholder="Enter your password"
              value={login.password}
              onChange={e => setLogin({...login,password:e.target.value})}/>

            <button className="primary-btn full-btn">Login</button>
            <small className="demo-note">Demo login only. No real account is created.</small>
            <button type="button" className="text-btn" onClick={() => go("home")}>
              <ArrowLeft size={15}/> Back to home
            </button>
          </form>
        </section>
      )}

      {page === "booking" && selected && (
        <section className="booking-page">
          <div className="booking-background"></div>
          <div className="booking-wrap">
            <button className="back-btn" onClick={() => go("detail")}>
              <ArrowLeft size={17}/> Back to room
            </button>

            <div className="booking-layout">
              <form className="booking-form" onSubmit={submitBooking}>
                <span className="section-label">RESERVE YOUR STAY</span>
                <h1>Complete Your Booking</h1>
                <p>Enter your details to create a demo booking.</p>

                <label>Full Name</label>
                <input required value={bookingForm.name}
                  onChange={e => setBookingForm({...bookingForm,name:e.target.value})}
                  placeholder="Your full name"/>

                <label>Email Address</label>
                <input required type="email" value={bookingForm.email}
                  onChange={e => setBookingForm({...bookingForm,email:e.target.value})}
                  placeholder="Your email"/>

                <label>Phone Number</label>
                <input required type="tel" value={bookingForm.phone}
                  onChange={e => setBookingForm({...bookingForm,phone:e.target.value})}
                  placeholder="Your phone number"/>

                <div className="date-fields">
                  <div>
                    <label>Check-in</label>
                    <input required type="date" min={new Date().toISOString().split("T")[0]}
                      value={bookingForm.checkIn}
                      onChange={e => setBookingForm({...bookingForm,checkIn:e.target.value})}/>
                  </div>
                  <div>
                    <label>Check-out</label>
                    <input required type="date" min={bookingForm.checkIn || new Date().toISOString().split("T")[0]}
                      value={bookingForm.checkOut}
                      onChange={e => setBookingForm({...bookingForm,checkOut:e.target.value})}/>
                  </div>
                </div>

                <label>Number of Guests</label>
                <select value={bookingForm.guests}
                  onChange={e => setBookingForm({...bookingForm,guests:e.target.value})}>
                  {Array.from({length:selected.guests},(_,i)=>i+1).map(n =>
                    <option key={n} value={n}>{n} Guest{n>1?"s":""}</option>
                  )}
                </select>

                <button className="primary-btn full-btn">
                  Confirm Demo Booking <ArrowRight size={18}/>
                </button>
                <small className="demo-note">This is a demo booking. No payment is collected.</small>
              </form>

              <aside className="booking-summary">
                <img src={selected.image} alt={selected.name}/>
                <span className="section-label">YOUR SELECTED ROOM</span>
                <h2>{selected.name}</h2>
                <p><Users size={16}/> Up to {selected.guests} guests</p>
                <h3>{money(selected.price)} <small>/ night</small></h3>
              </aside>
            </div>
          </div>
        </section>
      )}

      {page === "confirmation" && booking && (
        <section className="confirmation-page">
          <div className="confirmation-bg"></div>
          <div className="confirmation-card">
            <CheckCircle size={65}/>
            <span className="section-label">DREAMSTAY RESERVATION</span>
            <h1>Booking Confirmed!</h1>
            <p>Thank you, {booking.name}. Your demo reservation has been created.</p>
            <div className="confirmation-details">
              <p><span>Booking Reference</span><b>{booking.reference}</b></p>
              <p><span>Room</span><b>{booking.room}</b></p>
              <p><span>Check-in</span><b>{booking.checkIn}</b></p>
              <p><span>Check-out</span><b>{booking.checkOut}</b></p>
              <p><span>Guests</span><b>{booking.guests}</b></p>
              <p><span>Price per night</span><b>{money(booking.price)}</b></p>
            </div>
            <small>This is a demo booking confirmation. No real reservation or payment has been made.</small>
            <button className="primary-btn full-btn" onClick={() => go("home")}>
              Explore More Rooms
            </button>
          </div>
        </section>
      )}

      <footer className="footer">
        <div className="footer-brand">
          <h2><Leaf/> DreamStay</h2>
          <p>Find peace, comfort and beautiful moments in nature.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <button onClick={() => go("home")}>Home</button>
          <button onClick={() => go("home")}>Our Rooms</button>
          <button onClick={() => go("login")}>Login</button>
        </div>
        <div>
          <h3>Why DreamStay?</h3>
          <p>Beautiful stays</p>
          <p>Nature-inspired comfort</p>
          <p>Peaceful experiences</p>
        </div>
        <div className="footer-bottom">
          © 2026 DreamStay | React Hotel Booking Student Project
        </div>
      </footer>
    </div>
  );
}