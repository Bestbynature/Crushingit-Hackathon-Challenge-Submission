const listItems = [
  {
    id: 1,
    title: "Customize your online store",
    description:
      "Choose a theme and add your logo, colors, and images to reflect your brand.",
    image: "https://crushingit.tech/hackathon-assets/customise-store.png",
    btnText: "Customize theme",
    other: "",
  },
  {
    id: 2,
    title: "Add your first product",
    description:
      "Write a description, add photos, and set pricing for the products you plan to sell.",
    image: "https://crushingit.tech/hackathon-assets/product.png",
    btnText: "Add product",
    other: "Import product",
  },
  {
    id: 3,
    title: "Add a custom domain",
    description:
      "Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store.",
    image: "https://crushingit.tech/hackathon-assets/website.png",
    btnText: "Add domain",
    other: "",
  },
  {
    id: 4,
    title: "Name your store",
    description:
      "Your temporary store name is currently Davii collections. The store name appears in your admin and your online store.",
    image: "https://crushingit.tech/hackathon-assets/name-store.png",
    btnText: "Name store",
    other: "",
  },
  {
    id: 5,
    title: "Set up a payment provider",
    description:
      "Choose a payment provider to start accepting payments. You'll need to create an account with the payment provider and set it up with your Shopify store.",
    image: "https://crushingit.tech/hackathon-assets/payment.png",
    btnText: "Set up payment",
    other: "",
  },
];

const dashedCircle = `<svg class='dashedcirclesvg' tabindex="-1" xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 32 32' fill='none'>
<circle cx='16' cy='16' r='12' stroke='#ccc' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='4 6' />
</svg>`;

const fullCircle = `<svg tabindex="-1" xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 32 32' fill='none'>
<circle cx='16' cy='16' r='12' stroke='#ccc' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='none' />
</svg>
`;

const fullCircleFilled = `<svg tabindex="-1" xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 32 32' fill='#d9d9d9'>
<circle cx='16' cy='16' r='12' stroke='#ccc' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='none' />
</svg>
`;

const timeslot = `<svg class="timeslot-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path transform="rotate(-60 10 10)" d="M13.2803 9.03033C13.5732 8.73744 13.5732 8.26256 13.2803 7.96967C12.9874 7.67678 12.5126 7.67678 12.2197 7.96967L9.25 10.9393L8.03033 9.71967C7.73744 9.42678 7.26256 9.42678 6.96967 9.71967C6.67678 10.0126 6.67678 10.4874 6.96967 10.7803L8.71967 12.5303C9.01256 12.8232 9.48744 12.8232 9.78033 12.5303L13.2803 9.03033Z" fill="#fff"/>
<path d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.5 10C15.5 13.0376 13.0376 15.5 10 15.5C6.96243 15.5 4.5 13.0376 4.5 10C4.5 6.96243 6.96243 4.5 10 4.5C13.0376 4.5 15.5 6.96243 15.5 10Z" fill="none"/>
</svg>

`;

const checkmark = `<svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10" fill="#303030"></circle>
<path
  d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
  fill="#fff"
></path>
</svg>`;

const spinner = `<svg tabindex="0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28" fill="none">
<path
  d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
  stroke="#ccc"
  stroke-width="2.5"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
</svg>`;

const stepsList = document.querySelector(".stepsList");

const meterClass = document.querySelector(".meterClass");

const upArrow = document.querySelector(".upArrow");

const downArrow = document.querySelector(".downArrow");

const profilePop = document.querySelector(".profilePop");

const nameDiv = document.querySelector(".nameDiv");

const notification = document.querySelector(".notification");

const notifyBox = document.querySelector(".notifyBox");

const closeDiv = document.querySelector(".closeDiv");

const section1 = document.querySelector(".section1");

const searchFocus = () => {
  const searchInput = document.querySelector(".searchInput");
  const searchDiv = document.querySelector(".searchDiv");

  searchInput.addEventListener("focus", () => {
    searchDiv.classList.add("focus");
  });

  searchInput.addEventListener("blur", () => {
    searchDiv.classList.remove("focus");
  });
};

searchFocus();

closeDiv.addEventListener("click", () => {
  section1.style.display = "none";
});

notification.addEventListener("click", () => {
  if (notifyBox.classList.contains("show")) {
    notifyBox.classList.remove("show");
    notification.setAttribute("aria-expanded", "false");
    notification.focus();
  } else {
    notifyBox.classList.add("show");
    if (profilePop.classList.contains("show")) {
      profilePop.classList.remove("show");
      nameDiv.setAttribute("aria-expanded", "false");
    }
    notification.setAttribute("aria-expanded", "true");
    const notificationChildren = notifyBox.querySelectorAll('svg');
    notificationChildren[0].focus();

    notifyBox.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        notifyBox.classList.remove("show");
        notification.setAttribute("aria-expanded", "false");
        notification.focus();
      }else if(e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "ArrowRight"){
        e.preventDefault();
        const currentFocusedIndex = Array.from(notificationChildren).indexOf(e.target);
        const nextIndex = e.key === "ArrowDown" || e.key === "ArrowRight" ? (currentFocusedIndex + 1) % notificationChildren.length : (currentFocusedIndex - 1 + notificationChildren.length) % notificationChildren.length;
        notificationChildren[nextIndex].focus();
      }
    });
  }
});

nameDiv.addEventListener("click", () => {
  if (profilePop.classList.contains("show")) {
    profilePop.classList.remove("show");
    nameDiv.setAttribute("aria-expanded", "false");
  } else {
    profilePop.classList.add("show");
    nameDiv.setAttribute("aria-expanded", "true");
    if (notifyBox.classList.contains("show")) {
      notifyBox.classList.remove("show");
      notifyBox.setAttribute("aria-expanded", "false");
    }
    const menuItems = profilePop.querySelectorAll("[role='menuitem']");
    menuItems[0].focus();

    profilePop.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        profilePop.classList.remove("show");
        nameDiv.setAttribute("aria-expanded", "false");
        nameDiv.focus();
      } else if (
        e.key === "ArrowDown" ||
        e.key === "ArrowUp" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight"
      ) {
        e.preventDefault();
        const currentFocusedIndex = Array.from(menuItems).indexOf(e.target);
        const nextIndex =
          e.key === "ArrowDown" || e.key === "ArrowRight"
            ? (currentFocusedIndex + 1) % menuItems.length
            : (currentFocusedIndex - 1 + menuItems.length) % menuItems.length;
        menuItems[nextIndex].focus();
      }
    });
  }
});

let count = 0;

downArrow.style.display = "none";

upArrow.addEventListener("click", () => {
  stepsList.setAttribute("aria-hidden", "true");
  stepsList.style.display = "none";
  upArrow.setAttribute("aria-hidden", "true");
  upArrow.setAttribute("aria-expanded", "false");
  downArrow.setAttribute("aria-hidden", "false");
  upArrow.style.display = "none";
  downArrow.style.display = "block";
});

downArrow.addEventListener("click", () => {
  stepsList.style.display = "block";
  const firstFocus = stepsList.querySelectorAll(".stepDetails>span");
  firstFocus[0].focus();
  stepsList.setAttribute("aria-hidden", "false");
  upArrow.setAttribute("aria-hidden", "false");
  upArrow.setAttribute("aria-expanded", "true");
  downArrow.setAttribute("aria-hidden", "true");
  downArrow.style.display = "none";
  upArrow.style.display = "block";
});

function stepListsFxn() {
  stepsList.innerHTML = listItems
    .map((item) => {
      return `
        <div class="stepWrapper" role="listitem">
          <div class="step" role="button" aria-label="${item.title}">
          <div class="stepNumber" aria-label="step ${item.id}">
          <div class="stepNumberImage" tabindex="0" role="button">

          <div class="dashedCircleDiv"> ${dashedCircle}</div>
          <div class="fullCircleFilledDiv">${fullCircleFilled}</div>
          <div class=spinnerDiv>${spinner}</div>
          <div class="checkmarkDiv">${checkmark}</div>
          <div class="timeSlotDiv">${timeslot}</div>
         
          </div>

          </div>
            <div class="stepDetails" >
            <span tabindex="0">${item.title}</span></div>
          </div>
        </div>`;
    })
    .join("");
}

stepListsFxn();

const stepWrapper = document.querySelectorAll(".stepWrapper");
const stepDetails = document.querySelectorAll(".stepDetails");
const stepNumberImages = document.querySelectorAll(".stepNumberImage");

const init = (int) => {
  stepWrapper[int].style.backgroundColor = "#f7f7f7";

  stepDetails[int].innerHTML = `
  <div class="javLeft">
    <div tabindex="0">${listItems[int].title}</div>
    <div>${
      listItems[int].description
    } <span class="javLink"><a href="#" tabindex="0">Learn More</a></span></div>
    
    <div class="javButtonOther">
      <button class="javButton" tabindex="0" role="button">${
        listItems[int].btnText
      }</button>
      <div tabindex="${
        listItems[int].other.length > 1 ? "0" : "-1"
      }" role="button">${listItems[int].other}</div>
    </div>

  </div>
  <img src=${listItems[int].image} alt="step image" class="javLeftImage" />
  `;
};

init(0);

const stepDetailsFxn = () => {
  stepDetails.forEach((title, index) => {
    title.addEventListener("click", () => {
      const stepContent = listItems[index];

      stepWrapper.forEach((wrapper) => {
        wrapper.style.backgroundColor = "#fff";
      });

      stepDetails.forEach((title, index) => {
        title.innerHTML = `<span tabindex="0">${listItems[index].title}</span>`;
      });

      const targetParent = title.parentElement.parentElement;

      targetParent.style.backgroundColor = "#f7f7f7";

      title.innerHTML = `<div class="javLeft" role="region" aria-label="${
        stepContent.title
      }">
      <div aria-labelledby="stepDescription" tabindex="0">
        ${stepContent.title}
      </div>
      <div id="stepDescription">
        <p>${stepContent.description}</p>
        <span class="javLink"><a href="#" aria-label="Learn More" tabindex="0">Learn More</a></span>
      </div>
      <div class="javButtonOther">
        <button class="javButton" tabindex="0" aria-label="${
          stepContent.btnText
        }">${stepContent.btnText}</button>
        <div aria-hidden="true" tabindex="${
          stepContent.other.length > 1 ? "0" : "-1"
        }">${stepContent.other}</div>
      </div>
    </div>
    <img src="${stepContent.image}" alt="${
        stepContent.title
      }" class="javLeftImage" aria-hidden="true" />
    `;
    });
  });
};

stepDetailsFxn();

function updateCountAndMeter(count) {
  meterClass.innerHTML = `
    ${Math.max(1, count)}/5 completed
    <meter value="${Math.max(
      1,
      count
    )}" min="0" max="5" aria-valuemin="0" aria-valuemax="5" aria-valuenow="${Math.max(
    1,
    count
  )}" role="progressbar" aria-label="${Math.max(
    1,
    count
  )}/5 completed"></meter>
`;
}

updateCountAndMeter(count);

const dashedCirclesFxn = () => {
  stepNumberImages.forEach((stepNumberImage, index) => {
    let isCheckmark = false;

    stepNumberImage.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const clickEvent = new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true,
        });
        stepNumberImage.dispatchEvent(clickEvent);
      }
    });

    const spinnerDiv = stepNumberImage.querySelector(".spinnerDiv");
    const checkmarkDiv = stepNumberImage.querySelector(".checkmarkDiv");
    const dashedCircleDiv = stepNumberImage.querySelector(".dashedCircleDiv");
    const timeSlotDiv = stepNumberImage.querySelector(".timeSlotDiv");

    stepNumberImage.addEventListener("click", () => {
      const stepDiv = document.querySelectorAll(".stepDetails");
      const stepContent = listItems[index];

      if (isCheckmark) {
        dashedCircleDiv.style.display = "block";
        checkmarkDiv.style.display = "none";

        stepDiv.forEach((title, index) => {
          title.innerHTML = listItems[index].title;
        });

        stepWrapper.forEach((wrapper) => {
          wrapper.style.backgroundColor = "#fff";
        });

        init(Math.max(0, index - 1));

        if (count > 0) {
          count--;
          updateCountAndMeter(count);
        }
        isCheckmark = false;
      } else {
        const children = stepNumberImage.querySelectorAll(
          ".stepNumberImage > div"
        );

        children.forEach((child) => {
          child.style.display = "none";
        });

        setTimeout(() => {
          spinnerDiv.style.display = "block";
        }, 100);

        setTimeout(() => {
          spinnerDiv.style.display = "none";
          timeSlotDiv.style.display = "block";
        }, 300);

        setTimeout(() => {
          timeSlotDiv.style.display = "none";
          checkmarkDiv.style.display = "block";
          count++;
          updateCountAndMeter(count);

          stepDiv.forEach((title, index) => {
            title.innerHTML = `<span tabindex="0">${listItems[index].title}</span>`;
          });

          stepWrapper.forEach((wrapper) => {
            wrapper.style.backgroundColor = "#fff";
          });

          stepDiv[
            index
          ].innerHTML = `<div class="javLeft" role="region" aria-label="${stepContent.title}">
          <div role="heading" aria-level="2" tabindex="0">${stepContent.title}</div>
          <div>
            ${stepContent.description}
            <span class="javLink"
              ><a href="#" aria-label="Learn More" tabindex="0">Learn More</a></span
            >
          </div>
        
          <div class="javButtonOther">
            <button class="javButton" role="button" aria-label="${stepContent.btnText}" tabindex="0">
              ${stepContent.btnText}
            </button>
            <div tabindex="0">${stepContent.other}</div>
          </div>
        </div>
        <img
          src="${stepContent.image}"
          alt="${stepContent.title}"
          class="javLeftImage"
          aria-hidden="true"
        />
        `;

          stepWrapper[index].style.backgroundColor = "#f7f7f7";

          isCheckmark = true;
        }, 400);
      }
    });
  });
};

dashedCirclesFxn();

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.localName !== "svg") {
    e.target.click();
  }
});
