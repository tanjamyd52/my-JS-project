//#Kx1xgoKy8
// – Є масив
 let coursesAndDurationArray = [
     {title: "JavaScript Complex", monthDuration: 5},
     {title: "Java Complex", monthDuration: 6},
     {title: "Python Complex", monthDuration: 6},
    {title: "QA Complex", monthDuration: 4},
     {title: "FullStack", monthDuration: 7},
     {title: "Frontend", monthDuration: 4}
 ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,<br>
// в якому буде <h2 class=’heading’>  з title  елементу, та <p class=’description’><br>
// з monthDuration елементу.
//завдання робити через  цикли
for (const course of coursesAndDurationArray) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerText = course.title;
    const p = document.createElement('p');
    p.innerText = course.monthDuration;
    div.append(h2, p);
    document.body.appendChild(div);
}