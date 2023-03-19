function addSticker() {
    let title = $('.title');
    let text = $('.content');

    if(title.val() !== '' && title.val() !== ''){
        let li = $('<li class="note-content">')
            .append($('<a class="button">x</a>').click(removeSticket))
            .append($(`<h2> ${title.val()} </h2>`))
            .append($('<hr>'))
            .append($(`<p> ${text.val()} </p>`));

        $('#sticker-list')
            .append(li);

        function removeSticket() {
            this.parentNode.remove()
        }
    }

    title.value = '';
    text.value = '';

    /*
       let title = $(".title");
    let text = $(".content");
    console.log(title.val());
    if (title.val() !== "" && text.val() !== ""){
        let stickerList = $("#sticker-list");
        let listItem = $("<li>");
        listItem.addClass("note-content");
        let closeButton = $("<a>x</a>");
        closeButton.on("click", function () {
            listItem.remove();
        });
        closeButton.addClass("button");
        listItem.append(closeButton);
        listItem.append($(`<h2>${title.val()}</h2>`));
        listItem.append($(`<hr>`));
        listItem.append($(`<p>${text.val()}</p>`));
        stickerList.append(listItem);
        title.val("");
        text.val("");
    }
     */
}