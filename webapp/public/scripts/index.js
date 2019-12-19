
const presentationList = document.querySelector('.presentations');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');
const adminItems = document.querySelectorAll('.admin');

const setupUI = (user) => {
    if (user) {
        if (user.admin) {
            adminItems.forEach(item => item.style.display = 'block');
        }
        // account info
        db.collection('users').doc(user.uid).get().then(doc => {
            const html = `
                <div>Logged in as ${user.email}</div>
                <div>${doc.data().bio}</div>
                <div class = "pink-text">${user.admin ? 'Admin' : ''}</div>
            `;
            accountDetails.innerHTML = html;
        })
        //toggle UI elements
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
        adminItems.forEach(item => item.style.display = 'none');
        // hide account info
        accountDetails.innerHTML = '';
        //toggle UI elements
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
}

// setup presentations
const setupPresentations = (data) => {
    if(data.length) {
        let html = '';
        data.forEach(doc => {
            const presentation = doc.data();
            //console.log(presentation);
            const li = `
                <li>
                    <div class = "collapsible-header grey lighten-4">${presentation.title}</div>
                    <div class = "collapsible-body white">
                      ${presentation.content}
                      <p>Date: ${presentation.date}</p>
                      <p>Start Time: ${presentation.startingtime}</p>
                      <p>End Time: ${presentation.endtime}</p>

                    </div>

                </li>
              `;
            html += li;
        });
        presentationList.innerHTML = html;
    } else {
        presentationList.innerHTML = '<h5 class = "center-align">Login to view restricted data</h5>';
    }
};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
})
