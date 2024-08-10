async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data"); // any return promise
    await wait(1000);
    let data = await response.json(); // second return promise
  } catch (error) {
    console.log(error);
  } finally{

  }

  return data;
}
fetch("https://api.example.com/data")
  .then((res) => res.json())
  .then((data) => console.log(data));

fetchData().then((data) => console.log(data));

function wait(ms) {
    return new Promise((res , rej) => setTimeout(res , ms))
}