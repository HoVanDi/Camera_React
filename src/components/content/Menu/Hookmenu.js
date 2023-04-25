import React, { useState } from 'react';
import './menu.css';

const Menu1 = () => {
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [money, setMoney] = useState('');

  const checkOrder = (money) => {
    if (money >= price) {
      alert(
        'Đồ uống của bạn đây ' +
          type +
          '\nsố tiền dư: ' +
          (money - price) +
          'Đ'
      );
    } else {
      alert('Không đủ tiền');
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (price === '') {
      alert('Vui lòng chọn đồ uống');
    } else {
      if (money === '') {
        alert('Vui lòng nhập số tiền của bạn');
      } else {
        checkOrder(money);
      }
    }
  };

  const setHandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === 'money') {
      if (!Number(value)) {
        alert('Vui lòng nhập số');
      }
    }
    if (name === 'type') {
      if (value === 'cafe sữa') {
        setPrice(12000);
      } else if (value === 'cafe đá') {
        setPrice(10000);
      } else if (value === 'cafe không đường') {
        setPrice(8000);
      } else {
        setPrice(2000);
      }
    }
    eval(`set${name[0].toUpperCase() + name.slice(1)}`)(value);
  };

  return (
    <div className="menu-container">
      <form onSubmit={submitForm}>
        <table>
          <tbody>
            <tr>
              <td>Mời bạn chọn thức uống:</td>

              <td>
                <select name="type" onChange={setHandle}>
                  <option selected hidden>
                    Mời chọn
                  </option>
                  <option value="cafe sữa">Cà phê sữa</option>
                  <option value="cafe đá">Cà phê đá</option>
                  <option value="cafe không đường">Cà phê không đường</option>
                  <option value="Bò húc">Bò húc</option>
                </select>
              </td>
              <td>
                <label>Giá: {price}Đ</label>
              </td>
            </tr>

            <tr>
              <td>Mời nhập số tiền của bạn:</td>

              <td>
                <input name="money" type="number" onChange={setHandle} />
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="Thanh toán" />
      </form>
      <h2></h2>
    </div>
  );
};

export default Menu1;
