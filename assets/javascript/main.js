var projectsArray = [
{
  projectName: "South Park",
  thumbnail: "assets/images/SP.png",
  modalID: "southPark",
  modalLabel: "unit3b",
  modalTitle: "Word Guess Game",
  modalImg: "assets/images/SP-modal.png",
  gitRepo: "https://github.com/tracytn0411/Word-Guess-Game",
  gitPage: "https://tracytn0411.github.io/Word-Guess-Game/",
  description: "A computer game that runs in the browser, and feature dynamically updated HTML and CSS powered by  JavaScript code.  The theme of the game is South Park, where user will guess a song that has been play in this comedy TV show."
},
{
  projectName: "Health Trivia",
  thumbnail: "assets/images/Trivia1.jpg",
  modalID: "triviaOne",
  modalLabel: "unit5a",
  modalTitle: "General Health Trivia",
  modalImg: "assets/images/Trivia1-modal.png",
  gitRepo: "https://github.com/tracytn0411/Trivia-Game",
  gitPage: "https://tracytn0411.github.io/Trivia-Game/",
  description: "A trivia quiz with multiple choice options. The player has a limited amount of time to finish the whole quiz."
},
{
  projectName: "Silicon Valley",
  thumbnail: "assets/images/Trivia2 SV.jpg",
  modalID: "triviaTwo",
  modalLabel: "unit5b",
  modalTitle: "Silicon Valley Trivia",
  modalImg: "assets/images/Trivia2-modal.png",
  gitRepo: "https://github.com/tracytn0411/Trivia-Game-2",
  gitPage: "https://tracytn0411.github.io/Trivia-Game-2/",
  description: "A trivia game that shows only one question until player answers it or their time runs out."
},
{
  projectName: "Star Wars",
  thumbnail: "assets/images/StarWars.png",
  modalID: "starWars",
  modalLabel: "unit4b",
  modalTitle: "The Last Jedi",
  modalImg: "assets/images/StarWars-modal.png",
  gitRepo: "https://github.com/tracytn0411/RPG-Game",
  gitPage: "https://tracytn0411.github.io/RPG-Game/",
  description: "A role playing game."
},
{
  projectName: "Crystal Collector",
  thumbnail: "assets/images/CrystalCollector.png",
  modalID: "crystalCollector",
  modalLabel: "unit4a",
  modalTitle: "Crystal Collector Game",
  gitRepo: "https://github.com/tracytn0411/unit-4-game",
  gitPage: "https://tracytn0411.github.io/unit-4-game/",
},

{
  projectName: "GifTastic",
  thumbnail: "assets/images/GifTastic.jpg",
  modalID: "gifTastic",
  modalLabel: "unit6",
  modalTitle: "GifTastic App",
  gitRepo: "https://github.com/tracytn0411/GifTastic",
  gitPage: "https://tracytn0411.github.io/GifTastic/",
},
{
  projectName: "Psychic",
  thumbnail: "assets/images/Psychic Game.png",
  modalID: "psychicGame",
  modalLabel: "unit3a",
  modalTitle: "Psychic Game",
  gitRepo: "https://github.com/tracytn0411/Psychic-Game",
  gitPage: "https://tracytn0411.github.io/Psychic-Game/",
},
{
  projectName: "Train Scheduler",
  thumbnail: "assets/images/Train Clock.jpg",
  modalID: "trainScheduler",
  modalLabel: "unit7",
  modalTitle: "Train Scheduler",
  gitRepo: "https://github.com/tracytn0411/Train-Scheduler",
  gitPage: "https://tracytn0411.github.io/Train-Scheduler/",
},
{
  projectName: "Liri Bot",
  thumbnail: "assets/images/anki.png",
  modalID: "liriBot",
  modalLabel: "unit9",
  modalTitle: "LIRI Node App",
  gitRepo: "https://github.com/tracytn0411/LIRI-Node-App",
  gitPage: "https://tracytn0411.github.io/LIRI-Node-App/",
},
]

function displayGallery() {
  $.each(projectsArray, function () {
    var divCard = $("<div>").addClass("card bg-light");
    var cardBtn = $("<button>").addClass("btn m-1").attr({
      "data-toggle" : "modal",
      "data-target" : "#" + this.modalID,
    });
    var btnImg = $("<img>").addClass("img-fluid").attr({
      "src": this.thumbnail,
      "alt": this.projectName
    });
    var cardModal = $("<div>").addClass("modal fade").attr({
      "id" : this.modalID,
      "tabindex" : "-1",
      "role" : "dialog",
      "aria-labelledby" : this.modalLabel,
      "aria-hidden" : "true",
    });
    
    var modalHeader = $("<div>").addClass("modal-header").append([
      $("<h5>").addClass("modal-title").attr("id", this.modalLabel).text(this.modalTitle),
      $("<button>").addClass("close").attr({
        "data-dismiss" : "modal",
        "aria-label" : "Close"
      }).append("<i class='fas fa-times fa-xs'></i>")
    ])

    var modalBody = $("<div>").addClass("modal-body").append([
      $("<div>").addClass("container-fluid")
    ]);
    var projectImg = $("<img>").addClass("img-fluid").attr("src", this.modalImg);
    var projectDescription = $("<em>").text(this.description);

    var modalRow = $("<div>").addClass("row").append([
      $("<div>").addClass("col-md-7").append(projectImg),
      $("<div>").addClass("col-md-5").append(projectDescription)
    ])

    var modalFooter = $("<div>").addClass("modal-footer");
    var btnGit = $("<a>").addClass("btn btn-secondary").attr("href", this.gitRepo).append("<i class='fab fa-github'></i>");
    var btnDemo = $("<a>").addClass("btn btn-primary").attr("href", this.gitPage).append("<i class='fas fa-eye'></i>");

    var modalDialog = $("<div>").addClass("modal-dialog modal-lg").attr("role", "document");
    var modalContent = $("<div>").addClass("modal-content");

    divCard.append(cardBtn);
    cardBtn.append(btnImg);
    divCard.append(cardModal);
    cardModal.append(modalDialog);
    
    modalDialog.append(modalContent);
    modalContent.append(modalHeader);
    modalContent.append(modalBody);
    modalBody.append(modalRow);
    modalContent.append(modalFooter);
    modalFooter.append(btnGit);
    modalFooter.append(btnDemo);
    
    $("#portfolioGallery").append(divCard);

  })
}

$(document).ready(function() {
  displayGallery();
})