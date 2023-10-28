document.addEventListener("DOMContentLoaded", function () {
  const BASEURL = "http://localhost:4000/api/"; // Update the URL to your server

  ///////// COMPLIMENT BUTTON //////////
  const complimentBtn = document.getElementById("complimentButton");
  const getCompliment = () => {
    axios.get(`${BASEURL}compliment/`).then(res => {
      const data = res.data;
      alert(data);
    });
  };
  complimentBtn.addEventListener("click", getCompliment);

  ///////// FORTUNE BUTTON //////////
  const fortuneBtn = document.getElementById("fortuneButton");
  const getFortune = () => {
    axios.get(`${BASEURL}fortune/`).then(res => {
      const data = res.data;
      alert(data);
    });
  };
  fortuneBtn.addEventListener("click", getFortune);

  ///////// AURELIUS BUTTON //////////
  const aureliusBtn = document.getElementById("aureliusButton");
  const getAurelius = () => {
    axios.get(`${BASEURL}aurelius/`).then(res => {
      const data = res.data;
      alert(data);
    });
  };
  aureliusBtn.addEventListener("click", getAurelius);

  ///////// THOMAS BUTTON //////////
  const thomasBtn = document.getElementById("thomasButton");
  const getThomas = () => {
    axios.get(`${BASEURL}thomas/`).then(res => {
      const data = res.data;
      alert(data);
    });
  };
  thomasBtn.addEventListener("click", getThomas);

  ///////// NUMEROLOGY BUTTON //////////
  const submitBtn = document.getElementById("submitButton");
  submitBtn.addEventListener("click", () => {
    const val = document.getElementById("dayInput").value;
    console.log(`Returned value: ${val} testing`);
    axios.get(`${BASEURL}numerology/${val}`).then(res => {
      const data = res.data;
      alert(data);
    });
  });
});
