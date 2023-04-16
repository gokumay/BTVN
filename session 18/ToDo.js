class Task {
    constructor(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
}

//khai bao khoi tao mang task
var tasks = [
    new Task(1, 'Buy flowers for girl friend', false),
    new Task(1, 'Buy flowers for girl friend', false),
    new Task(1, 'Buy flowers for girl friend', false),
]

//dinh nghia nhiem vu
function loadTasks() {
    let row = '';
    for (let t of tasks) {
        rows += `<tr data-id="${t.id}">
                    <td>${t.id}</td>
                    <td>${t.name}</td>
                    <td>${t.status}</td>
                    <td>
                        <div>
                            <button class="btnEdit">EDIT</button>
                            <button class="btnDelete">DELETE</button>
                            <button class="btnFinish">FINISH</button>
                        </div>
                    </td>
            </tr>
        `
    }
    $('.list').html(rows);
}

// xu ly su kien
$(document).on('change', '.taskStatus', function() {
    console.log($(this));
    let tr = $(this).parents('tr');
    let id = $(tr).data('id');
    let stt = $(this.val();)
    tasks = tasks.map(t => {
        if (t.id == id) {
            t.status = stt == 'true' ? true : false;
        }
        return t;
    })
    alert('Changed');
})

loadTasks();