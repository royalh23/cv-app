import '../styles/Form.css';

export default function PersonalForm({
  personalFormData,
  setPersonalFormData,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(personalFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="name">*Full name: </label>
      <input
        type="text"
        name="name"
        id="name"
        value={personalFormData.name}
        onChange={(e) =>
          setPersonalFormData({
            ...personalFormData,
            name: e.target.value,
          })
        }
        required
      />

      <label htmlFor="email">*Email: </label>
      <input
        type="email"
        name="email"
        id="email"
        value={personalFormData.email}
        onChange={(e) =>
          setPersonalFormData({
            ...personalFormData,
            email: e.target.value,
          })
        }
        required
      />

      <label htmlFor="phone">*Phone number: </label>
      <input
        type="tel"
        name="phone"
        id="phone"
        value={personalFormData.phone}
        onChange={(e) =>
          setPersonalFormData({
            ...personalFormData,
            phone: e.target.value,
          })
        }
        required
      />

      <label htmlFor="address">*Address: </label>
      <input
        type="text"
        name="address"
        id="address"
        value={personalFormData.address}
        onChange={(e) =>
          setPersonalFormData({
            ...personalFormData,
            address: e.target.value,
          })
        }
        required
      />

      <div className="buttons">
        <button type="submit" className="save">
          Save
        </button>
      </div>
    </form>
  );
}
