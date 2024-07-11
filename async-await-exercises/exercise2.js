/*
    1. Create a function called "fetchFast" that returns
       a Promise that resolves with the String "Fast Done!"
       after 2 seconds
    2. Create a function called "fetchSlow" that returns
       a Promise that resolves with the String "Slow Done"
       after 6 seconds
    3. Print out "Program starting..."

    4. Create an async function that uses await to wait for
       the data to comes back from "fetchFast" then log out
       the data. Then use await to wait for the data to come
       back from "fetchSlow" and log it out right after.

    5. Call the async function you created
    6. Log out "Program complete!"

    7. How long does this take and why?
    It takes 8 seconds because the await call for fetchSow won't trigger until
    fetchFast is resolved
    8. How could you speed it up?
    We could use the Promise.all method or we could just call them separatedly
*/
const fetchFast = () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
      resolve("Fast Done!");
      }, 2000);
   });
};

const fetchSlow = () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve("Slow Done!");
      }, 6000);
   });
};

console.log("Program starting...");

const firstTimeStap = new Date();
/*fetchSlow runs after fetchFast is resolved:
const fetchTotal = async () => {
   const fetchedFast = await fetchFast();
   console.log(fetchedFast);

   const fetchedSlow = await fetchSlow();
   console.log(fetchedSlow);

   const secondTimeStap = new Date();
   console.log(secondTimeStap - firstTimeStap);//8011 milliseconds
   console.log("Program complete!");
};
fetchTotal();

//we can separate both fetchFast and FetchSlow and then call them separatedly:
const fetch1 = async () => {
   const fetchedFast = await fetchFast();
   //console.log(fetchedFast);
};

const fetch2 = async () => {
   const fetchedSlow = await fetchSlow();
   //console.log(fetchedSlow);
   const secondTimeStap = new Date();
   const timeElapsed = secondTimeStap - firstTimeStap;
   console.log(timeElapsed);//6005 milliseconds
   console.log("Program complete!");
};

fetch1();
fetch2();
*/
//We can just delete the await operator and use the Promise.all method to call both fetch functions
const fetchTotal = async () => {
   const fetchedFast = fetchFast();
   //console.log(fetchedFast);

   const fetchedSlow = fetchSlow();
   //console.log(fetchedSlow);

   const result = await Promise.all([fetchedFast, fetchedSlow]);

   const secondTimeStap = new Date();
   console.log(secondTimeStap - firstTimeStap);
   console.log("Program complete!");
};
fetchTotal();
