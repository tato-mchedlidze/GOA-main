// 1) userRole — ternary
<p>{userRole === "admin" ? "Admin Panel" : "User Dashboard"}</p>

// 2) isAvailable — ternary
<p>{isAvailable ? productPrice : "Out of stock"}</p>

// 3) isDaytime — ternary
<img src={isDaytime ? "/sun.png" : "/moon.png"} />

// 4) hasNotification — &&
{hasNotification && <p>New Notification</p>}

// 5) email exists — &&
{email && <p>{email}</p>}

// 6) discount > 0 — &&
{discount > 0 && <p>Discount Available!</p>}
