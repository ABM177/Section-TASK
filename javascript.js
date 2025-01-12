const data = [
    {
        "Documents" : ["Document 1.jpg", "Document 2.jpg", "Document 3.jpg"]
    },
    {
        "Desktop" : ["Screenshot 1.png", "Screenshot 2.png", "video.mp4"]
    },
    {
        "Downloads" : [
            {
                "Drivers" : ["PrinterDriver.dmg", "CameraDriver.dmg"]
            },
            "chromeddriver.dmg"
        ]
    },
    {
        "Applications": [
            "Webstorm.dmg",
            "PyCharm.dmg",
            "IntelliJ.dmg",
            "Notepad++.exe"
        ]
    }
];

function renderTree(data, parent) {
    data.forEach(item => {
      if (typeof item === "object") {
        const folderName = Object.keys(item)[0];
        const folderContent = item[folderName];
  
        const li = document.createElement("li");
        li.className = "folder";
        li.textContent = folderName;
  
        const ul = document.createElement("ul");
        ul.className = "hidden"; 
        renderTree(folderContent, ul);
  
        li.appendChild(ul);
        li.addEventListener("click", function (e) {
          e.stopPropagation();
          ul.classList.toggle("hidden"); 
        });
  
        parent.appendChild(li);
      } else {
        const li = document.createElement("li");
        li.className = "file";
        li.textContent = item;
        parent.appendChild(li);
      }
    });
  }
  
  function initializeTree() {
    const root = document.getElementById("folderTree");
    root.innerHTML = ""; 
    const ul = document.createElement("ul");
    renderTree(data, ul);
    root.appendChild(ul);
  }
  
  
  function addFolder() {
    alert("Add Folder functionality will go here.");
  }
  function addFile() {
    alert("Add File functionality will go here.");
  }
  
  initializeTree();