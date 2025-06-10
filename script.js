const sectionForm = document.getElementById("sectionForm");
    const sectionInput = document.getElementById("sectionInput");
    const sectionsContainer = document.getElementById("sectionsContainer");

    sectionForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const sectionName = sectionInput.value.trim();
      if (!sectionName) return;
      createSection(sectionName);
      sectionInput.value = "";
    });

    function createSection(title) {
      const section = document.createElement("div");
      section.className = "section";

      const header = document.createElement("div");
      header.className = "section-header";

      const h2 = document.createElement("h2");
      h2.textContent = title;
      const delBut = document.createElement("button");
      delBut.className = "delete-btn";
      delBut.textContent = "Delete Section";
      delBut.addEventListener("click", () => 
      section.remove());

      header.appendChild(h2);
      header.appendChild(delBut);

      const iList = document.createElement("div");

      const iForm = document.createElement("form");
      iForm.className = "add-i-form";

      const iInput = document.createElement("input");
      iInput.type = "text";
      iInput.placeholder = "Add items...";
      iInput.required = true;

      const addiBtn = document.createElement("button");
      addiBtn.type = "submit";
      addiBtn.textContent = "Add";

      iForm.appendChild(iInput);
      iForm.appendChild(addiBtn);

      iForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const iText = iInput.value.trim();
        if (!iText) return;
        const i = createi(iText);
        iList.appendChild(i);
        iInput.value = "";
      });

      section.appendChild(header);
      section.appendChild(iList);
      section.appendChild(iForm);
      sectionsContainer.appendChild(section);
    }

    function createi(text) {
      const div = document.createElement("div");
      div.className = "i";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      const label = document.createElement("label");
      label.textContent = text;

      const delBtn = document.createElement("button");
      delBtn.className = "delete-btn";
      delBtn.textContent = "❌";
      delBtn.addEventListener("click", () => div.remove());

      div.appendChild(checkbox);
      div.appendChild(label);
      div.appendChild(delBtn);

      return div;
    }