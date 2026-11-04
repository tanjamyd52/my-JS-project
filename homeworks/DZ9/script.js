// Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте<br>
//  де він знаходиться)
//  Створити для кожного елементу масиву свій блок, блок розділити блоками,<br>
//  в яких будуть зберігатись значення окремих властивостей, для властивості
//  modules зробити список з елементами
//  Приклад структури знаходиться у файлі example.png, який лежить в папці з
//  поточним файлом
//
 let coursesArray = [
     {
        title: 'JavaScript Complex',
         monthDuration: 5,
         hourDuration: 909,
         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
     },
    {
         title: 'Java Complex',
         monthDuration: 6,
         hourDuration: 909,
         modules: ['html',
             'css',
             'js',
             'mysql',
            'mongodb',
             'angular',
             'aws',
             'docker',
             'git',
             'java core',
             'java advanced']
     },
     {
         title: 'Python Complex',
         monthDuration: 6,
         hourDuration: 909,
         modules: ['html',
             'css',
             'js',
             'mysql',
             'mongodb',
             'angular',
             'aws',
             'docker',
            'python core',
             'python advanced']
    },
     {
         title: 'QA Complex',
         monthDuration: 4,
         hourDuration: 909,
         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
     },
     {
         title: 'FullStack',
         monthDuration: 7,
         hourDuration: 909,
         modules: ['html',
             'css',
             'js',
             'mysql',
             'mongodb',
             'react',
             'angular',
             'aws',
             'docker',
             'git',
            'node.js',
             'python',
             'java']
    },
     {
         title: 'Frontend',
         monthDuration: 4,
         hourDuration: 909,
         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
     }
 ];


// Контейнер у вашому HTML, куди ми додамо результат (наприклад, <div id="courses"></div>)
const coursesContainer = document.getElementById('courses');

coursesArray.forEach(course => {
    // 1. Створюємо блок для самого курсу
    const courseDiv = document.createElement('div');
    // 2. Додаємо заголовок курсу
        const title = document.createElement('h2');
    title.innerText =`title:'${course.title}'`;
    courseDiv.appendChild(title);
       const p = document.createElement('p');
    p.innerText = `monthDuration:'${course.monthDuration}' , hourDuration:'${course.hourDuration}',`;
        courseDiv.appendChild(p);
    // 3. Створюємо батьківський тег списку (<ul>)
    const ul = document.createElement('ul');
    ul.innerText = `modules:`;
    // 4. Перебираємо масив модулів та створюємо для кожного тег <li> (ліжку)
    course.modules.forEach(module => {
        const li = document.createElement('li');
        li.innerText =`'${module}'`;
        ul.appendChild(li); // додаємо ліжку в список
    });

    // 5. Додаємо готовий список модулів у блок курсу
    courseDiv.appendChild(ul);

    // 6. Виводимо все на сторінку
    document.body.appendChild(courseDiv);
});
