// Email form logic
document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('emailForm');
    const signatureSection = document.getElementById('signatureSection');
    const propertyList = document.getElementById('propertyList');
    const signatureForm = document.getElementById('signatureForm');

    // Check if user already signed
    if (localStorage.getItem('signedNDA') === 'true') {
        showProperties();
    }

    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        if (email) {
            // Save email (for demo, just localStorage)
            localStorage.setItem('userEmail', email);
            // Show signature section
            signatureSection.style.display = 'block';
            signatureSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    signatureForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const fullName = document.getElementById('fullName').value;
        const signature = document.getElementById('signature').value;
        if (fullName && signature) {
            // Save signature (for demo, just localStorage)
            localStorage.setItem('signedNDA', 'true');
            showProperties();
            // Optionally, hide signature section
            signatureSection.style.display = 'none';
        }
    });

    function showProperties() {
        // Example properties
        const properties = [
            {
                title: "3BR Single Family - Dallas, TX",
                price: "$210,000",
                desc: "Off-market deal, needs light rehab. ARV $300k+.",
                address: "123 Main St, Dallas, TX"
            },
            {
                title: "Duplex - Atlanta, GA",
                price: "$320,000",
                desc: "Fully rented, cash flowing. Great location.",
                address: "456 Peachtree Ave, Atlanta, GA"
            }
        ];
        propertyList.innerHTML = properties.map(p => `
            <div class="property-card">
                <h3>${p.title}</h3>
                <p><strong>Price:</strong> ${p.price}</p>
                <p><strong>Address:</strong> ${p.address}</p>
                <p>${p.desc}</p>
            </div>
        `).join('');
    }
});
