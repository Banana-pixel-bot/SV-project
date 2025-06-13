document.addEventListener('DOMContentLoaded', function() {
    const currentFloorInput = document.getElementById('current-floor');
    const nextFloorInput = document.getElementById('next-floor');
    const submitBtn = document.getElementById('submit-btn');
    const clearBtn = document.getElementById('clear-btn');
    const recordList = document.getElementById('record-list');
    const totalCount = document.getElementById('total-count');
    const upCount = document.getElementById('up-count');
    const downCount = document.getElementById('down-count');

    let records = JSON.parse(localStorage.getItem('elevatorRecords')) || [];
    updateDisplay();

    submitBtn.addEventListener('click', function() {
        const currentFloor = parseInt(currentFloorInput.value);
        const nextFloor = parseInt(nextFloorInput.value);

        if (isValidInput(currentFloor, nextFloor)) {
            addRecord(currentFloor, nextFloor);
            clearInputs();
            currentFloorInput.focus();
        }
    });

    clearBtn.addEventListener('click', function() {
        if (confirm('確定要清除所有記錄嗎？')) {
            records = [];
            localStorage.removeItem('elevatorRecords');
            updateDisplay();
        }
    });

    // 添加鍵盤事件支援
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            if (document.activeElement === currentFloorInput) {
                nextFloorInput.focus();
            } else if (document.activeElement === nextFloorInput) {
                submitBtn.click();
            }
        }
    });

    function isValidInput(current, next) {
        if (isNaN(current) || isNaN(next)) {
            alert('請輸入有效的樓層數字');
            return false;
        }
        if (current < 1 || current > 7 || next < 1 || next > 7) {
            alert('樓層必須在1-7之間');
            return false;
        }
        if (current === next) {
            alert('目前樓層和下一樓層不能相同');
            return false;
        }
        return true;
    }

    function addRecord(currentFloor, nextFloor) {
        const timestamp = new Date().toLocaleString();
        const direction = nextFloor > currentFloor ? "上樓" : "下樓";
        const record = {
            timestamp,
            currentFloor,
            nextFloor,
            direction,
        };
        
        records.unshift(record);
        localStorage.setItem('elevatorRecords', JSON.stringify(records));
        updateDisplay();
    }

    function updateDisplay() {
        recordList.innerHTML = '';
        let upMovements = 0;
        let downMovements = 0;

        records.forEach(record => {
            const recordElement = document.createElement('div');
            recordElement.className = 'record-item';
            recordElement.innerHTML = `
                <span>從 ${record.currentFloor} 樓 ${record.direction}到 ${record.nextFloor} 樓</span>
                <span class="record-time">${record.timestamp}</span>
            `;
            recordList.appendChild(recordElement);

            if (record.direction === "上樓") upMovements++;
            else downMovements++;
        });

        totalCount.textContent = records.length;
        upCount.textContent = upMovements;
        downCount.textContent = downMovements;
    }

    function clearInputs() {
        currentFloorInput.value = '';
        nextFloorInput.value = '';
    }
});