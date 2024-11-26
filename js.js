"use strict"

function modifyname(name) {
  name = name.trim();
  name = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return name;
}

function checkSpam(comment) {
  comment =  comment.replace(/xxx/gi, "***");
  comment = comment.replace(/viagra/gi, "***");
  return comment;
}

document.querySelector(".btn").addEventListener("click", function (){
  let userName = document.getElementById("name").value
  let avatar = document.getElementById("src").value
  let comment = document.getElementById("comment").value
  
  if (!userName || !avatar || !comment) {
    alert("Все поля должны быть заполнены");
  };

  if (userName.length < 4 || userName.length > 10) {
    alert("Имя должно быть длиной от 4 до 10 символов")
  };

  //Преобразуем полученные имя и коменнтарий
  let formattedName = modifyname(userName);
  let checkComment = checkSpam(comment);

  document.querySelector(".outputName").textContent = formattedName;
  
  //выводим
  document.querySelector(".outputComment").textContent = checkComment;
  const avatarImg = document.querySelector(".outputAvatar");
  avatarImg.src = avatar
  
  document.querySelector(".right-wrapper").style.display = "flex";
  //очищаем поля ввода
  document.getElementById("name").value = "";
  document.getElementById("src").value = "";
  document.getElementById("comment").value = "";  

});


/* пример ссылки на аватар
 https://i.pinimg.com/736x/0f/28/4e/0f284e56ae4d2567571f96fc8188640d--owl-pictures-wallpaper-backgrounds.jpg */