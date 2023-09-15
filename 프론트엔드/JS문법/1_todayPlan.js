const plan = { 0: "" };
console.log(Object.values(plan).length);

planContent = prompt("오늘 할 일을 입력해주세요");
plan[0] = planContent;

while (true) {

    planContent = prompt("명령어를 입력 해주세요: (new, list, delete, quit)");
    //삭제 한 번호를 어떻게 당기지
    if (planContent === "list") {
        console.log("***************");
        for (let plan2 in plan) {
            console.log(`${plan2} : ${plan[plan2]}`);
        }
        console.log("***************");
    }
    else if (planContent === "new") {
        planContent = prompt("오늘 할 일을 입력해주세요")
        plan[Object.values(plan).length] = planContent;
    }
    else if (planContent === "delete") {
        planContent = parseInt(prompt("삭제할 번호를 입력해주세요"));

        for (let j = planContent; j < Object.values(plan).length - 1; j++) {
            plan[j] = plan[j + 1];
        }

        delete plan[Object.values(plan).length - 1];

    }
    else if (planContent === "quit") {
        console.log("프로그램 종료");
        break;
    }
    else {
        prompt("올바른 명령어를 입력해주세요");
    }


}