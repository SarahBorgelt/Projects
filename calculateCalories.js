<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cat Food Calculator</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
    <div class="main layout">
    <nav class="sidebar">
      <ul>
      <li><a href="homepage.html">Homepage</a></li>
      <li><a href="cat_food.html" aria-current="page">Cat Calorie Calculator</a></li>
      <li><a href="cat.med.html">Schedule Medication Reminders</a></li>
      <li><a href="feline.care.html">How to Care for Your Feline</a></li>
      <li><a href="pet_adoption.html">Pets for Adoption</a></li>
      <li><a href="about_me.html">About Me</a></li>
      </ul>
    </nav>
    <div class="content-area">
    <h1>How Many Calories Does Your Cat Need?</h1>
    <p>To determine how many calories your cat needs, please use the calculator below:</p>
   <form id="catCalculator">
   <div class="form-group">
   <label for="ageDropdown">1) Please select the option that best describes your cat's body type.</label>
   <select id = "ageDropdown" name = ageDropdown>
     <option value = ""></option>    
     <option value = "Growing Kitten">Growing Kitten</option>    
     <option value = "Neutered Adult">Neutered Adult</option>
     <option value = "Intact Adult">Intact Adult</option>
     <option value = "Obese Adult">Obese Adult</option>
   </select>
   </div>
   <div class="form-group">
   <label for="weightDropdown">2) What is your cat's body weight (lbs)?</label>
      <select id = "weightDropdown" name = weightDropdown>
     <option value = ""></option>    
     <option value = "4">4</option>    
     <option value = "5">5</option>
     <option value = "6">6</option>
     <option value = "7">7</option>
     <option value = "8">8</option>
     <option value = "9">9</option>
     <option value = "10">10</option>
   </select>
   </div>
   </form>
   <div class = "space">
   <button type="button" onclick="calculateCalories()">Calculate Calorie Need</button>
   </div>
   <script src="calculateCalories.js"></script>
   </div>
  </div>
  <footer><strong><p> &copy 2025 Whisker Wishes | Designed by Sarah Borgelt</p></strong></footer>
</div>
</body>
</html>
