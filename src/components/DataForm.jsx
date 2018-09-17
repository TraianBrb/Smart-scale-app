import React from 'react';

class DataForm extends React.Component {
  render() {
    return (
      <form action="" className="data-form">
        <div>
          <label className="data-form__label" htmlFor="Name">
            Name
          </label>
          <input
            className="data-form__input"
            id="Name"
            type="text"
            name="Name"
            placeholder="Name"
          />
        </div>
        <div>
          <label className="data-form__label" htmlFor="Age">
            Age
          </label>
          <input
            className="data-form__input"
            id="Age"
            type="text"
            name="Age"
            placeholder="Age"
          />
        </div>
        <div>
          <label className="data-form__label" htmlFor="Sex">
            Sex
          </label>
          <select id="Sex" className="data-form__input">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label className="data-form__label" htmlFor="Height">
            Height
          </label>
          <input
            className="data-form__input"
            id="Height"
            type="text"
            name="Height"
            placeholder="Height"
          />
        </div>
        <div>
          <label className="data-form__label" htmlFor="Weight">
            Weight
          </label>
          <input
            className="data-form__input"
            id="Weight"
            type="text"
            name="Weight"
            placeholder="Weight"
          />
        </div>
        <div>
          <label className="data-form__label" htmlFor="Body Fat %">
            Body Fat %
          </label>
          <input
            className="data-form__input"
            id="Body Fat %"
            type="text"
            name="Body Fat %"
            placeholder="Body Fat %"
          />
        </div>
        <div>
          <label className="data-form__label" htmlFor="Total Body Water %">
            Total Body Water %
          </label>
          <input
            className="data-form__input"
            id="Total Body Water %"
            type="text"
            name="Total Body Water %"
            placeholder="Total Body Water %"
          />
        </div>
        <div>
          <label className="data-form__label" htmlFor="Muscle Mass">
            Muscle Mass
          </label>
          <input
            className="data-form__input"
            id="Muscle Mass"
            type="text"
            name="Muscle Mass"
            placeholder="Muscle Mass"
          />
        </div>
        <div>
          <label className="data-form__label" htmlFor="Physique Rating">
            Physique Rating
          </label>
          <input
            className="data-form__input"
            id="Physique Rating"
            type="text"
            name="Physique Rating"
            placeholder="Physique Rating"
          />
        </div>
        <div>
          <label className="data-form__label" htmlFor="Bone Mineral Mass">
            Bone Mineral Mass
          </label>
          <input
            className="data-form__input"
            id="Bone Mineral Mass"
            type="text"
            name="Bone Mineral Mass"
            placeholder="Bone Mineral Mass"
          />
        </div>
        <div>
          <label className="data-form__label" htmlFor="Basal Metabolic Rate">
            Basal Metabolic Rate
          </label>
          <input
            className="data-form__input"
            id="Basal Metabolic Rate"
            type="text"
            name="Basal Metabolic Rate"
            placeholder="Basal Metabolic Rate"
          />
        </div>
        <div>
          <label className="data-form__label" htmlFor="Metabolic Age">
            Metabolic Age
          </label>
          <input
            className="data-form__input"
            id="Metabolic Age"
            type="text"
            name="Metabolic Age"
            placeholder="Metabolic Age"
          />
        </div>
        <div>
          <label className="data-form__label" htmlFor="Visceral Fat">
            Visceral Fat
          </label>
          <input
            className="data-form__input"
            id="Visceral Fat"
            type="text"
            name="Visceral Fat"
            placeholder="Visceral Fat"
          />
        </div>
      </form>
    );
  }
}

export default DataForm;
