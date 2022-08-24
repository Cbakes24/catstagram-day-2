export const createMainContent = () => {
  // Create h1
  const h1 = document.createElement("h1");
  h1.innerText = "Catstagram";

  // Create img
  const img = document.createElement("img");
  img.style.margin = "20px";
  img.style.maxWidth = "750px";

  const container = document.querySelector(".container");
  container.appendChild(h1);
  container.appendChild(img);

  fetchImage();
  vote();
  changePicture();
  createComment();
};

const fetchImage = async () => {
  // Fetch image from API and set img url
  try {
    const kittenResponse = await fetch(
      "https://api.thecatapi.com/v1/images/search?size=small"
    );
    // Converts to JSON
    const kittenData = await kittenResponse.json();
    // console.log(kittenData);
    const kittenImg = document.querySelector("img");
    kittenImg.src = kittenData[0].url;
  } catch (e) {
    console.log("Failed to fetch image", e);
  }
};
let count = document.createElement("div");

const changePicture = () => {
  let addButton = document.createElement("button");
  document.body.appendChild(addButton);
  addButton.innerText = "add";
  addButton.addEventListener("click", (e) => {
    fetchImage();
    count.innerText = 0;
    commentBox.innerText = "Comment Here";
  });
};


const vote = () => {
  let clicks = 0;

  count.innerText = clicks;
  count.id = "counter";
  document.body.appendChild(count);

  const upButton = document.createElement("button");
  upButton.innerText = "UpVote";
  document.body.appendChild(upButton);

  upButton.addEventListener("click", (e) => {
    clicks += 1;
    console.log("clicks", e.target);
    console.log("clicks", clicks);
    count.innerText = clicks;
    console.log("count", countEl);
  });

  const downButton = document.createElement("button");
  downButton.innerText = "DownVote";
  document.body.appendChild(downButton);
  downButton.addEventListener("click", (e) => {
    clicks--;
    count.innerText = clicks;
    // console.log('clicks', clicks)
  });
};


const createComment = () => {
  const commentBox = document.createElement("textarea");
  commentBox.innerText = "comment here";
  document.body.appendChild(commentBox);
};
