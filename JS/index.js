var arrNum = [];
document.getElementById('btnThemSo').onclick = function () {
    // input: number
    var nhapSo = Number(document.getElementById('nhapSo').value);
    // output: arrNum

    // xử lý
    arrNum.push(nhapSo);

    document.getElementById('themSo').innerHTML = arrNum;
}

// 1. Tổng số dương
document.getElementById('btnTinhTong').onclick = function () {
    // output
    var tongSoDuong = 0;
    //  xử lý
    for (var index = 0; index < arrNum.length; index++) {
        if (arrNum[index] > 0) {
            tongSoDuong += arrNum[index]
        }

    }
    document.getElementById('tinhTong').innerHTML = tongSoDuong;
}
// 2. Đếm số dương
document.getElementById('btnDemSo').onclick = function () {
    // output
     var demSoDuong = 0;
    //  xử lý
    for (var index = 0; index < arrNum.length; index++) {
        if (arrNum[index] > 0) {
            demSoDuong +=1;
        }
    }
    document.getElementById('demSo').innerHTML = demSoDuong;
}
// 3. Tìm số nhỏ nhất
document.getElementById('bntTimSoNhoNhat').onclick = function () {
    // output
    var min = arrNum[0];
    var soNhoNhat = 0;
    //  xử lý
    for (var index = 1; index < arrNum.length; index++) {
            if(min > arrNum[index]){
            soNhoNhat = arrNum[index];
            }
    }
    document.getElementById('timSoNhoNhat').innerHTML = soNhoNhat;
}

