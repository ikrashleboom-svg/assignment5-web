// task 1
let userProfile = {
  name: "Azimbek", birthYear: 2007, isDeveloper: true,
  hobbies: ["programming", "gaming", "music"]
}
console.log(userProfile)

// task 2
let currentYear = 2026
let age = currentYear - userProfile.birthYear
let hobbiesCount = userProfile.hobbies.length
console.log("age: " + age)
console.log("hobbies count: " + hobbiesCount)
document.getElementById("result").textContent ="age: " + age + ", hobbies: " + hobbiesCount

// task 4
let username = document.getElementById("username")
let birthYear = document.getElementById("birthYear")
let button = document.getElementById("saveBtn")
let info = document.getElementById("profileInfo")

button.addEventListener("click", () => {
  userProfile.name = username.value
  userProfile.birthYear = Number(birthYear.value)

  console.log(userProfile)
  info.textContent = "profile updated: " + userProfile.name
})

//task 5
let itemInput = document.getElementById("itemInput")
let addBtn = document.getElementById("addBtn")
let removeBtn = document.getElementById("removeBtn")
let itemList = document.getElementById("itemList")

addBtn.addEventListener("click", () => {
  let li = document.createElement("li")
  li.textContent = itemInput.value
  itemList.appendChild(li)
  itemInput.value = ""
})

removeBtn.addEventListener("click", () => {
  let last = itemList.lastElementChild
  if (last) {
    last.remove()
  }
})