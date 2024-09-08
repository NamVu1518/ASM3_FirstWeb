"use strict";

let goalOriginalContent = document.querySelector(".goal-original-content");
let primaryTemplate = document.querySelector(".scope-template");
let memberOriginalContent = document.querySelector(".member-original-content");
let primaryOriginalContent = document.querySelector(
  ".primary-original-content"
);
let timelineOriginalContent = document.querySelector(
  ".timeline-original-content"
);
let superTitle = document.querySelector(".super-title");

//--------------------------------------------------------------------------//

let ProjectData1 = {
  name: "CV Cá Nhân",
  allGoals: [
    {
      goalTitle: "Goal 1",
      goalContent: "Hoàn thành dự án trong một tuần",
    },
    {
      goalTitle: "Goal 2",
      goalContent: "Tôi ưu code và giao diện",
    },
  ],
  allScope: {
    scopeIn: "Vũ Đức Nam",
    scopeOut: "Nhà tuyển dụng và giảng viên FUNIX",
  },
  allMember: [
    {
      memberTitle: "Vũ Đức Nam",
      memberContent: "Developer Chính của dự án",
    },
  ],
  allPrimary: ["Trang chủ, các section về công việc", "Project Chater"],
  allTimeLine: [
    {
      timelineTitle: "Bắt đầu dự án",
      timelineContent: "27/8/2024",
    },
    {
      timelineTitle: "Hoàn thành dự án",
      timelineContent: "2/9/2024",
    },
  ],
};

let ProjectData2 = {
  name: "Dự án game Age Of Robot",
  allGoals: [
    {
      goalTitle: "Goal 1",
      goalContent: "Hoàn thành dự án trong một năm",
    },
    {
      goalTitle: "Goal 2",
      goalContent: "Tôi ưu code và giao diện",
    },
    {
      goalTitle: "Goal 2",
      goalContent: "Up dự án thành công lên các chợ ứng dụng",
    },
  ],
  allScope: {
    scopeIn: "Sounthen Star Game Studio",
    scopeOut: "Người dùng, người chơi game chiến thuật, thủ thành",
  },
  allMember: [
    {
      memberTitle: "Nguyễn Hùng",
      memberContent: "Leader của dự án, Game Designer",
    },
    {
      memberTitle: "Hùng",
      memberContent: "Tech Leader của dự án",
    },
    {
      memberTitle: "Bùi Thành Long",
      memberContent: "Developer của dự án",
    },
    {
      memberTitle: "Vũ Đức Nam",
      memberContent: "Developer của dự án",
    },
  ],
  allPrimary: [
    "UI sơ khai",
    "Hệ thồng tấn công",
    "Hệ thồng xây dựng",
    "Hệ thồng tiền tệ",
    "Hệ thồng cửa hàng",
  ],
  allTimeLine: [
    {
      timelineTitle: "Bắt đầu dự án",
      timelineContent: "5/2023",
    },
    {
      timelineTitle: "Tham gia dự án",
      timelineContent: "12/2023",
    },
    {
      timelineTitle: "Đình chỉ dự án",
      timelineContent: "6/2024",
    },
  ],
};

let ProjectData3 = {
  name: "Dự Án Website bán đồ ăn",
  allGoals: [
    {
      goalTitle: "Goal 1",
      goalContent: "Hoàn thành dự án trong 4 tuần",
    },
    {
      goalTitle: "Goal 2",
      goalContent: "Tôi ưu hiệu suất và giao diện",
    },
    {
      goalTitle: "Goal 2",
      goalContent: "Deploy thành công và vận hành",
    },
  ],
  allScope: {
    scopeIn: "Team dự án 1",
    scopeOut: "Người đặt hàng website",
  },
  allMember: [
    {
      memberTitle: "Vũ Đức Nam",
      memberContent: "Leader của dự án",
    },
    {
      memberTitle: "Dương Văn Thưởng",
      memberContent: "Thành viên dự án",
    },
    {
      memberTitle: "Trần Thị Vui",
      memberContent: "Thành viên dự án",
    },
    {
      memberTitle: "Thành",
      memberContent: "Thành viên dự án",
    },
  ],
  allPrimary: [
    "Trang chủ",
    "Hệ thồng quản lý sản phẩm",
    "Hệ thồng quản lý đơn hàng",
    "Hệ thồng quản lý thanh toán",
    "Hệ thồng quản lý ý kiển hồi đáp",
    "Quản lý domain và máy chủ",
  ],
  allTimeLine: [
    {
      timelineTitle: "Dự án bắt đâu",
      timelineContent: "2/2024",
    },
    {
      timelineTitle: "Hoàn thành dự án",
      timelineContent: "4/2024",
    },
  ],
};

let ArrProjectData = [ProjectData1, ProjectData2, ProjectData3];

let indexProjectSelected = 1;

Main();

function Main() {
  let selectID = WhichProjectSelected();
  if (
    selectID === null ||
    isNaN(selectID) ||
    selectID < 0 ||
    selectID >= ArrProjectData.length
  ) {
    console.error("Invalid project index selected");
  } else {
    indexProjectSelected = selectID;
  }
  InsertSuperTitle();
  InsertGoals();
  InsertScope();
  InsertPrimary();
  InsertTeam();
  InsertTimeline();
}

// Get index of project selected to get data
function WhichProjectSelected() {
  let urlParams = new URLSearchParams(window.location.search);
  let projectId = urlParams.get("id");
  if (projectId === null) return;
  return parseInt(projectId, 10);
}

// Create new element like the template in his place
function CloneStructureElement(template) {
  if (!template) return;
  let temp = template.cloneNode(true);
  template.parentNode.appendChild(temp);
  return temp;
}

function InsertSuperTitle() {
  superTitle.textContent = ArrProjectData[indexProjectSelected].name;
}

function InsertGoals() {
  let arrGoals = ArrProjectData[indexProjectSelected].allGoals;

  for (let i = 0; i < arrGoals.length; i++) {
    let elementNode = CloneStructureElement(goalOriginalContent);
    let goalTitle = elementNode.querySelector(".title-goal");
    let goalContent = elementNode.querySelector(".content-goal");

    goalTitle.textContent = arrGoals[i].goalTitle;
    goalContent.textContent = arrGoals[i].goalContent;
  }

  goalOriginalContent.parentNode.removeChild(goalOriginalContent);
}

function InsertScope() {
  let scope = ArrProjectData[indexProjectSelected].allScope;

  let contentIn = primaryTemplate.querySelector(".content-in");
  let contentOut = primaryTemplate.querySelector(".content-out");

  contentIn.textContent = scope.scopeIn;
  contentOut.textContent = scope.scopeOut;
}

function InsertTeam() {
  let arrMember = ArrProjectData[indexProjectSelected].allMember;

  for (let i = 0; i < arrMember.length; i++) {
    let elementNode = CloneStructureElement(memberOriginalContent);
    let goalTitle = elementNode.querySelector(".title-member");
    let goalContent = elementNode.querySelector(".content-member");

    goalTitle.textContent = arrMember[i].memberTitle;
    goalContent.textContent = arrMember[i].memberContent;
  }

  memberOriginalContent.parentNode.removeChild(memberOriginalContent);
}

function InsertPrimary() {
  let arrPrimary = ArrProjectData[indexProjectSelected].allPrimary;

  for (let i = 0; i < arrPrimary.length; i++) {
    let elementNode = CloneStructureElement(primaryOriginalContent);
    let primaryContent = elementNode.querySelector(".content-primary");

    primaryContent.textContent = arrPrimary[i];
  }

  primaryOriginalContent.parentNode.removeChild(primaryOriginalContent);
}

function InsertTimeline() {
  let arrTimeline = ArrProjectData[indexProjectSelected].allTimeLine;

  for (let i = 0; i < arrTimeline.length; i++) {
    let elementNode = CloneStructureElement(timelineOriginalContent);
    let timelineIndex = elementNode.querySelector(".timeline-index");
    let timelineTitle = elementNode.querySelector(".title-timeline");
    let timelineContent = elementNode.querySelector(".content-timeline");

    timelineIndex.textContent = i + 1;
    timelineTitle.textContent = arrTimeline[i].timelineTitle;
    timelineContent.textContent = arrTimeline[i].timelineContent;
  }

  timelineOriginalContent.parentNode.removeChild(timelineOriginalContent);
}
