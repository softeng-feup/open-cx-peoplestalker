window.chartId = [];
window.chartname = [];
window.presentationTitle = [];
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
  var i=0;
  var class1="collapsible-header grey lighten-4_"+i;
  var class2="collapsible-body white_"+i;

    if(data.length) {
        let html = '';
        data.forEach(doc => {
          const presentation = doc.data();
          window.startingtime[i]=presentation.date+"T"+presentation.startingtime+":00.000000";
          window.endtime[i]=presentation.date+"T"+presentation.endtime+":00.000000";
          window.chartId[i] = "chartId" + i;
          window.presentationTitle[i]=presentation.title+".";
          class1="collapsible-header grey lighten-4_"+i;
        class2="collapsible-body white_"+i;
        window.chartname[i]="chart"+i;

            const li = `
                <li>
                    <div class = "${class1}">${presentation.title}</div>
                    <div class = "${class2}">
                      ${presentation.content}
                      <p>Date: ${presentation.date}</p>
                      <p>Start Time: ${presentation.startingtime}</p>
                      <p>End Time: ${presentation.endtime}</p>
                      <span class = "test"></span>
                      <div id=${window.chartId[i]}><svg width="90px"  height="90px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling" style="background: none;"><circle cx="50" cy="50" fill="none" ng-attr-stroke="{{config.color}}" ng-attr-stroke-width="{{config.width}}" ng-attr-r="{{config.radius}}" ng-attr-stroke-dasharray="{{config.dasharray}}" stroke="#6ac1a5" stroke-width="9" r="33" stroke-dasharray="155.50883635269477 53.83627878423159" transform="rotate(324 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></circle></svg></div>

                    </div>
                </li>
              `;
              i=i+1;
            html += li;
        presentationList.innerHTML = html;
        });
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
