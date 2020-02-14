function solve() {
    // взимаме елемента на див-а, който съдържа съобщението
    let targetDiv=document.getElementsByClassName('my-message')[0];
    // взимаме елемента на полето за въвеждане на съобщение
    let textArea=document.getElementById("chat_input");
    //взимане на елемента на чат хронологията
    let chatMessageArea = document.getElementById("chat_messages");

    // взимаме бутона за изпращане
    let sendBtn=document.getElementById("send");
    //добавяме евентЛистенер на бутона
    sendBtn.addEventListener("click",function () {
        // клонираме елемента със съобщението, за да можем в последствие да го добавим в чат хронологията, а полето за въвеждане да го занулим
        let targetDivClone=targetDiv.cloneNode(true);
        // ако не сложим .cloneNode(true) ще клонираме по референция, понеже взимаме масив
        // взимаме от полето за писане текста
        let textAreaContent=textArea.value;
        //вкарваме взетия текст в клонирания див
        targetDivClone.textContent=textAreaContent;
        //добавяме напълнения с текст клониран див в чат хронологията
        chatMessageArea.appendChild(targetDivClone);
        //изчистваме полето за писане на съобщения
        textArea.value="";

    })
}