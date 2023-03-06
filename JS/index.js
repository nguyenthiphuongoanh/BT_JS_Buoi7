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

    for (var i = arrNum.length - 1; i >= 0; i--) {
        if (arrNum[i] > 0 && soDuongNhoNhat > arrNum[i])   {
            soDuongNhoNhat = arrNum[i];
        }
    }
    document.getElementById('timSoDuongNhoNhat').innerHTML = soDuongNhoNhat;

}
 
// 5. Tìm số chẵn cuối cùng
document.getElementById('bntTimSoChan').onclick = function () {
    
    var soChanCuoiCung = timSoChanCuoiCung(arrNum)

    document.getElementById('timSoChan').innerHTML = soChanCuoiCung;
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

// 8. Tìm số nguyên tố đầu tiên
document.getElementById('bntTimSoNguyenTo').onclick = function () {

    var soNguyenTo = [];

    for (var i = 2; i < arrNum.length; i++) {
       if(kiemTraSoNguyenTo(arrNum[i]) ==1 ) {soNguyenTo.push(arrNum[i]); 
        break;
       }
    }
    document.getElementById('timSoNguyenTo').innerHTML = soNguyenTo;

}


// 9. Đếm số nguyên
var arrNumber = [];
document.getElementById('btnThemSo-2').onclick = function () {
   
    var nhapSo = Number(document.getElementById('nhapSo-3').value);
 
    // xử lý
    arrNumber.push(nhapSo);

    document.getElementById('themSo-2').innerHTML = arrNumber;
}

document.getElementById('bntDemSoNguyen').onclick = function(){
    
    
    var count = 0;
    for (var i = 0; i < arrNumber.length; ++i) {
        if (Number.isInteger(arrNumber[i])) {
            count++; 
        }
        document.getElementById('demSoNguyen').innerHTML = count;
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