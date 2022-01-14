const saveButton = document.createElement('button')
saveButton.innerText = 'Save Item'
console.log('button added to amazon');
if (document.getElementById('averageCustomerReviews_feature_div')) {
    document.getElementById('averageCustomerReviews_feature_div').appendChild(saveButton)

    saveButton.addEventListener('click', () => {

        chrome.storage.sync.set({ "yourBody": "myBody" }, function () {
            //  A data saved callback omg so fancy
        });
    })
}
;
