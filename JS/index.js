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
            demSoDuong += 1;
        }
    }
    document.getElementById('demSo').innerHTML = demSoDuong;
}
// 3. Tìm số nhỏ nhất
document.getElementById('bntTimSoNhoNhat').onclick = function () {
    // output
    var soNhoNhat = arrNum[0];
    // var soNhoNhat = 0;
    //  xử lý
    for (var index = 1; index < arrNum.length; index++) {
        if (soNhoNhat > arrNum[index]) {
            soNhoNhat = arrNum[index];
        }
    }
    document.getElementById('timSoNhoNhat').innerHTML = soNhoNhat;
}

// 4. Tìm số dương nhỏ nhất
document.getElementById('bntTimSoDuongNhoNhat').onclick = function () {

    var soDuongNhoNhat = arrNum[0];

    for (var i = 1; i < arrNum.length; ++i) {
        if (soDuongNhoNhat > arrNum[i] && arrNum[i] > 0) {
            soDuongNhoNhat = arrNum[i];

        }
    }
    document.getElementById('timSoDuongNhoNhat').innerHTML = soDuongNhoNhat;

}
// 
// 5. Tìm số chẵn cuối cùng
document.getElementById('bntTimSoChan').onclick = function () {
    function checkSoChan(n) {
        //flag = 1 => số lẻ 
        //flag = 0 => số chẵn

        var flag = 1;
        if (n % 2 == 0) flag = 0;
        return flag;
    }
    function timSoChanCuoiCung(arrNum) {
        for (var i = arrNum.length - 1; i >= 0; i--) {
            if (checkSoChan(arrNum[i]) == 0) return arrNum[i];
        }
    }
    document.getElementById('timSoChan').innerHTML = timSoChanCuoiCung(arrNum);
}
// 6. Đổi chỗ
document.getElementById('bntDoiCho').onclick = function () {
    function doiCho(arrNum, viTri1, viTri2) {
        var temp = arrNum[viTri1];
        arrNum[viTri1] = arrNum[viTri2];
        arrNum[viTri2] = temp;
    }
    var viTri1 = document.getElementById('nhapSo-1').value;
    var viTri2 = document.getElementById('nhapSo-2').value;
    doiCho(arrNum, viTri1, viTri2);
    document.getElementById('doiCho').innerHTML = arrNum;
}

// 7. Sắp xếp tăng dần
document.getElementById('bntSapXep').onclick = function () {

    arrNum.sort(function (a, b) {
        return a - b;
    });
    document.getElementById('sapXep').innerHTML = arrNum;
}

// 8. Tìm số nguyên đầu tiên
document.getElementById('bntTimSoNguyenTo').onclick = function () {
    var soNguyenTo = '';
    for (var i = 0; i < arrNum.length; ++i) {
       
        var checkSNT = kiemTraSoNguyenTo(arrNum[i]);

        if (checkSNT) {
            soNguyenTo += arrNum[i] + ' '
        }
    }
    document.getElementById('timSoNguyenTo').innerHTML = soNguyenTo;

}
//Hàm tìm số nguyên tố
function kiemTraSoNguyenTo(number) {
    var checkSNT = true;
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            checkSNT = false;
            break;
        }
    }
    return checkSNT;
}

// 9. Đếm số nguyên
var arrNumber = [];
document.getElementById('btnThemSo-2').onclick = function () {
    // input: number
    var nhapSo = Number(document.getElementById('nhapSo-3').value);
    // output: arrNum

    // xử lý
    arrNumber.push(nhapSo);

    document.getElementById('themSo-2').innerHTML = arrNumber;
}
document.getElementById('bntDemSoNguyen').onclick = function(){
    function soNguyenDuong(n){
        // flag = 1 => số nguyên dương
        // flag = 0 => không phải số nguyên dương
        
        var flag = 0;
        var i = 0;
        while(i <= n){
            if( n > 0 && n % 1 == 0 ) {   
                flag = 1;
                break;
            }
            i++;
        }
        return flag;
    }
    
    var count = 0;
    for (var i = 0; i < arrNumber.length; ++i) {
        var check = soNguyenDuong(arrNumber[i]);
        if (check == 1) {
           document.getElementById('demSoNguyen').innerHTML = arrNumber[i]+ " ";
            ++count;  
        }
    }
   
}

// 10. So sánh số lượng số âm và số dương
document.getElementById('bntSoSanh').onclick = function(){
    var soAm = 0;
    var soDuong = 0;
    var ketQua ='';
    for(var i = 0; i < arrNum.length; ++i) {
    arrNum[i] < 0 ? soAm++ : soDuong ++;
    }
    if(soAm === soDuong){
   ketQua = `Số Âm =  Số Dương`
    }else{
      ketQua = soAm > soDuong ? `Số Âm > Số Dương` : `Số Âm < Số Dương`
    }

    document.getElementById('soSanh').innerHTML = ketQua;

}