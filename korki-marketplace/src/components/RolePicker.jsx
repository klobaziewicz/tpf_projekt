import { ROLE_OPTIONS } from "../constants/roles";

export default function RolePicker({ value, onChange, disabled = false }) {
  return (
    <div className="role-picker" role="radiogroup" aria-label="Wybierz rolę">
      {ROLE_OPTIONS.map((option) => {
        const selected = value === option.value;

        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={selected}
            className={`role-option${selected ? " role-option-selected" : ""}`}
            onClick={() => onChange(option.value)}
            disabled={disabled}
          >
            <span className="role-option-icon" aria-hidden="true">
              {option.icon}
            </span>
            <span className="role-option-content">
              <span className="role-option-label">{option.label}</span>
              <span className="role-option-description">{option.description}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
