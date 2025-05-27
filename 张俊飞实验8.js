// 班级学生名单数据（示例数据，实际使用时请替换为真实数据）
const students = [
 "郭超", "侯宪坤", "黄博", "李永乐", "林佳棋", "秦士淞", "孙家豪", "刘冰倩", "刘宇倩", "姜子超", "鞠忠宏", "李茂川", "孙义凯",
 "索京奥", "秦金龙", "王朝闻", "邵尚薇", "吴梦瑶", "王俊豪", "王文昌", "王运旺", "王祉盛", "卫学振", "徐浩文", "许广洋", "赵含蕊", "赵珈艺",
 "许源赫", "薛景文", "张丁文", "张俊飞", "张云翔", "周政涟", "范昱涵", "徐佳慧", "张韵", "赵家豪", "赵宝华", "赵家豪", "高一涵", "卜家豪",
 "董恩浩", "陈亚欣", "李云", "丁晓萱", "房芮禾", "何沛洋", "贾旭", "靳思同", "李凤豪", "李嘉兴", "高鹿桐", "张璐璐", "李欣宇", "刘百刚",
 "刘峻泽", "刘志龙", "李万琪", "李业勤", "李建宇", "孙若冰", "吕君蕊", "孙子凌", "邢嘉旺", "毛诚一", "孙健玮", "王宪斌", "王子林", "刘一翔",
 "王梦月", "武启航", "张静", "王政皓", "王志甲", "许珈玮", "张连祥", "张淑恒", "张照毅", "张艳可", "邹谦慧", "白林涵", "张智", "赵正阳",
 "祝祥和", "段鹏松", "高俊腾", "谷天乐", "张智", "董萌萌", "陈昊妍"

];

// DOM元素
const studentListEl = document.getElementById('student-list');
const selectedStudentEl = document.getElementById('student-name');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');

// 渲染学生名单
function renderStudentList() {
  students.forEach(student => {
    const studentCard = document.createElement('div');
    studentCard.className = 'student-card';
    studentCard.textContent = student;
    studentCard.dataset.name = student;
    studentListEl.appendChild(studentCard);
  });
}

// 随机选择学生
let intervalId;
let isSelecting = false;

function startSelection() {
  if (isSelecting) return;
  
  isSelecting = true;
  startBtn.disabled = true;
  stopBtn.disabled = false;
  
  // 添加动画效果
  document.getElementById('selected-student').classList.add('animate-pulse-scale');
  
  intervalId = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * students.length);
    const randomStudent = students[randomIndex];
    
    // 更新选中的学生显示
    selectedStudentEl.textContent = randomStudent;
    
    // 更新高亮显示
    document.querySelectorAll('.student-card').forEach(card => {
      if (card.dataset.name === randomStudent) {
        card.classList.add('highlight');
      } else {
        card.classList.remove('highlight');
      }
    });
  }, 100); // 每100ms切换一次学生
}

function stopSelection() {
  if (!isSelecting) return;
  
  isSelecting = false;
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  
  // 移除动画效果
  document.getElementById('selected-student').classList.remove('animate-pulse-scale');
  
  // 选中的学生添加闪烁效果
  selectedStudentEl.classList.add('text-red-500');
  setTimeout(() => {
    selectedStudentEl.classList.remove('text-red-500');
  }, 1000);
}

// 事件监听
startBtn.addEventListener('click', startSelection);
stopBtn.addEventListener('click', stopSelection);

// 初始化页面
renderStudentList();