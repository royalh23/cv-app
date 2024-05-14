export default function PersonalForm({
  personalFormData,
  setPersonalFormData,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(personalFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        *Full name:{' '}
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
      </label>
      <label htmlFor="email">
        *Email:{' '}
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
      </label>
      <label htmlFor="phone">
        *Phone number:{' '}
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
      </label>
      <label htmlFor="address">
        *Address:{' '}
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
      </label>
      <button type="submit">Save</button>
    </form>
  );
}
