
//making new items
$('.listBar').on('click', '.newItem', function() {
    let list = $(this).parentsUntil('.listBox');
    let listContainer = $(list).children('.list');
    var itemName = prompt('What do you want to call this item?', 'Item Name');
    if (itemName == null || itemName == '') {
        return;
    } else {
        $(listContainer).append('<div class="listItem"><li class="item">'+ $(itemName) +'</li><div class="itemBar"><div class="userButtons"><i class="bi bi-pencil-square editItem"></i><i class="bi bi-x-square deleteItem"></i></div></div></div>');
    }
});

// Edit and delete list
$('.listBar').on('click', '.editList', function() {
    let listContainer = $(this).parentsUntil('#listBox');
    let content = $(listContainer).children('.listTitle');
    $(this).parent().parent().append('<div class="editBar"><input type="text" class="editInput" maxlength="240" value="' + $(content).text() + '"> <i class="bi bi-check-square submitList"></i> </div>');
});

$('.listBar').on('click', '.deleteList', function() {
    let listContainer = $(this).parentsUntil('#listContainer');
    if (confirm("Are you sure you want to delete?")) {
        $(listContainer).remove();
    } else {
        return;
    }

});


// Edit and delete item
$('.itemBar').on('click', '.editItem', function() {
    let listItem = $(this).parentsUntil('.listItem');
    let content = $(listItem).children('.item');
    $(this).parent().parent().parent().append('<div class="editBar"><input type="text" class="editInput" maxlength="240" value="' + $(content).val() + '"> <i class="bi bi-check-square submitItem"></i></div>');
});

$('.itemBar').on('click', '.deleteItem', function() {
    let commentContainer = $(this).parentsUntil('.list');
    if (confirm("Are you sure you want to delete?")) {
        $(commentContainer).remove();
    } else {
        return;
    }
});

// Edit functions for both lists and their items
$('.listItem').on('click', '.submitItem', function() {
    let item = $(this).parentsUntil('.list');
    let content = $(item).children('.item');
    let editForm = $(this).parentsUntil('.listItem');
    let editedItem = $(item).children('.editInput').val();
    $(content).text(`${editedItem}`);
    $(editForm).remove();
});
$('.listBox').on('click', '.submitList', function() {
    let list = $(this).parentsUntil('#listContainer');
    let content = $(list).children('.listTitle');
    let editForm = $(this).parentsUntil('.listBar');
    let editedItem = $(list).children('.editInput').val();
    $(content).text(`${editedItem}`);
    $(editForm).remove();
});
$('#inputs').on('click', '.submit', function () {
    $('#listContainer').append('<div class="col-md-3 listBox"><div class="container-fluid listBar"> <h3 class="listTitle">' + $('.bidInput').val() + '</h3><div class="listButtons"><i class="bi bi-plus-square newItem"></i><i class="bi bi-pencil-square editList"></i><i class="bi bi-x-square deleteList"></i></div></div><ul class="list"></ul></div>');
});
//Checkbox toggle
$('.checkbox').click(function () { 
    $(this).toggleClass('bi-square');
    $(this).toggleClass('bi-check2-square');
});