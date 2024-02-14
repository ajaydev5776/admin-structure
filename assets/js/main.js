const switchbtn = document.querySelector('#switch')
const asidebar = document.querySelector('#asidebar')

switchbtn.addEventListener('click', () =>{
    asidebar.classList.toggle('active')
})


function togglePasswordVisibility() {
    var passwordInput = document.getElementById("yourPassword");
    var icon = document.getElementById("toggleIcon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}
  // Select All checkbox functionality
  const checkboxAll = document.getElementById('datatableCheckAll');
  const checkboxes = document.querySelectorAll('.form-check-input');

  checkboxAll.addEventListener('change', function () {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = checkboxAll.checked;
    });
  });

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
      checkboxAll.checked = Array.from(checkboxes).every(checkbox => checkbox.checked);
    });
  });

  // Initialize DataTable
  $(document).ready(function () {
    $('#datatable').DataTable({
      "dom": '<"top"if>rt<"bottom"lp><"clear">',
      "searching": false, // Hide search bar
    });
  });


// $(document).ready(function() {
//     let myTable = $('#example').DataTable({
//         columnDefs: [{
//             orderable: false,
//             className: 'select-checkbox',
//             targets: 0,
//         }],
//         select: {
//             style: 'os', // 'single', 'multi', 'os', 'multi+shift'
//             selector: 'td:first-child',
//         },
//         order: [
//             [1, 'asc'],
//         ],
//     });

//     $('#MyTableCheckAllButton').click(function() {
//         if (myTable.rows({
//                 selected: true
//             }).count() > 0) {
//             myTable.rows().deselect();
//             return;
//         }

//         myTable.rows().select();
//     });

//     myTable.on('select deselect', function(e, dt, type, indexes) {
//         if (type === 'row') {
//             // We may use dt instead of myTable to have the freshest data.
//             if (dt.rows().count() === dt.rows({
//                     selected: true
//                 }).count()) {
//                 // Deselect all items button.
//                 $('#MyTableCheckAllButton i').attr('class', 'far fa-check-square');
//                 return;
//             }

//             if (dt.rows({
//                     selected: true
//                 }).count() === 0) {
//                 // Select all items button.
//                 $('#MyTableCheckAllButton i').attr('class', 'far fa-square');
//                 return;
//             }

//             // Deselect some items button.
//             $('#MyTableCheckAllButton i').attr('class', 'far fa-minus-square');
//         }
//     });
// });
 

