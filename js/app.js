// variables

const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');
// array of titles showing them on the top of screen
const arrtitles=['Faculties and subjects', 'Teachers', 'Students']
let activeLink = 0; 

// fill data in content
fillcontent()

// paste data in modal form
fill_openModal()


function fill_openModal() {
// clear 'select' and add base tags
let htm='<option>Choose...</option>'
$('#selected_faculty').html(htm)
$('#selected_course').html(htm)
$('#selected_subject').html(htm)
$('#selected_course_student').html(htm)

// add lists of faculties
for (const id in faculties) {
    if (Object.hasOwnProperty.call(faculties, id)) {
        const element = faculties[id];
        let el=document.createElement('option')
        el.value=id
        el.innerText=element.title
        $('#selected_faculty').append(el)
        
    }
}
// add lists of courses

for (const id in courses) {
    if (Object.hasOwnProperty.call(courses, id)) {
        const element = courses[id];
        let el=document.createElement('option')
        el.value=id
        el.innerText=element.title
        $('#selected_course').append(el)
        
    }
}

for (const id in courses) {
    if (Object.hasOwnProperty.call(courses, id)) {
        const element = courses[id];
        let el=document.createElement('option')
        el.value=id+'_student'
        el.innerText=element.title
        $('#selected_course_student').append(el)
        
    }
}

// add lists of subjects

for (const id in subjects) {
    if (Object.hasOwnProperty.call(subjects, id)) {
        const element = subjects[id];
        let el=document.createElement('option')
        el.value=id
        el.innerText=element.title
        $('#selected_subject').append(el)
        
    }
}
}

// listen to click to link in the menu and show same sections
links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');
            document.getElementById('menu-btn').checked=false

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
                $("#title").text(arrtitles[i])
            }, 300);
        }
    })
})


// listen to scroll and show shadow and narrow to up
window.addEventListener('scroll', function(e) {
    let scroll_position = window.scrollY;
    let navbar=document.getElementById('navbar');
    scroll_position>100 ? navbar.classList.add('scrollpage') : navbar.classList.remove('scrollpage');
    scroll_position>100 ? $('#narrowup').css('display','block') : $('#narrowup').css('display','none');
  });

  // make slow scrolling to up
  function slowscroll() {
      $('html,body').animate({
        scrollTop: 0
    },200)
 }

 // modal window - show and close
 let modal ={
    show(id){
        var scrollbar = (document.body.clientWidth - window.innerWidth) + 'px';
        document.body.style.overflow = 'hidden';
        document.querySelector('#'+id).style.marginLeft = scrollbar;
        $('#'+id).addClass('show');
    },
    close(id){
        document.body.style.overflow = 'visible';
        document.querySelector('#'+id).style.marginLeft = '0px';
        $('#'+id).removeClass('show');
    }
}

// link to button of the main menu in modal
function nav_modal(id) {
    $('.btnsmodal').removeClass('collapse show').addClass('collapse');
    $('#add_data').addClass('collapse show');
    $('#'+id+'_newdata').addClass('collapse show');
}
 
// reset form in modal
function resetmodal() {
    fill_openModal();
    $('#form_course')[0].reset();
    $('#form_newsubject')[0].reset();
    $('#form_teacher')[0].reset();
    $('.btnsmodal').addClass('collapse show');
    $('#add_data').removeClass('collapse show').addClass('collapse');

    document.querySelectorAll('.newdata').forEach(el => {
        $(el).removeClass('collapse show').addClass('collapse');

    });
 }

 // Function of filling content
function fillcontent() {
    // section faculty
    $('#sec_faculty').html('')

    for (const id in faculties) {
        if (Object.hasOwnProperty.call(faculties, id)) {
            // faculty object
            const f_obj = faculties[id];
            // create head of faculty
            let rh=document.createElement('div')
            rh.className="row f_title"
            rh.id=id
            rh.innerText=f_obj.title
            $('#sec_faculty').append(rh)
            let container=document.createElement('div')
            container.className="row"
            // paste data: course, subjects
            // create grid
            for (let i = 0; i < f_obj.idcourses.length; i++) {
                const idc = f_obj.idcourses[i]; // id course
                
            
            let dr = document.createElement('div')
            dr.className="col-md-4"
            dr.id='title_'+idc
            dr.innerHTML=`<center><h2>`+courses[idc].title+`</h2></center>`
           
            $(container).append(dr); // title of course

            // list of subjects
            // sort by semestr
            let tobj = [];
            for (let i = 0; i < courses[idc].idsubjects.length; i++) {
                tobj.push(subjects[courses[idc].idsubjects[i]]);
            }
            tobj.sort((a, b) => a.semestr > b.semestr ? 1 : -1);
            let ul = document.createElement('ul')

            for (let x = 0; x < tobj.length; x++) {
                const o = tobj[x];
                let li = document.createElement('li')
                    li.innerHTML='<span class="semestr">Semestr '+o.semestr+' - '+o.title+'</span>'
                    ul.append(li)
            }
           
            dr.append(ul)
        }
        $('#sec_faculty').append(container) 

        }
    }
 }