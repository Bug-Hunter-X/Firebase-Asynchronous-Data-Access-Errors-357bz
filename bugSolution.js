The correct way to access data from Firebase is to handle the asynchronous nature of the data retrieval.  Here are two common solutions:

**1. Using Promises:**
```javascript
db.ref('users/123').once('value').then((snapshot) => {
  const data = snapshot.val();
  if (data) {
    const username = data.username;
    console.log(username);
  } else {
    console.log('User data not found');
  }
}).catch((error) => {
  console.error('Error fetching data:', error);
});
```
**2. Using Async/Await:**
```javascript
async function getUserData() {
  try {
    const snapshot = await db.ref('users/123').once('value');
    const data = snapshot.val();
    if (data) {
      const username = data.username;
      console.log(username);
    } else {
      console.log('User data not found');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

getUserData();
```
Both solutions demonstrate how to wait for the data to become available and gracefully handle the case where the data might be null or undefined.  Always check if the data exists before accessing any properties to prevent errors.