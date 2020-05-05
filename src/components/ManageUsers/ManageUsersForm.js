import React from "react";
import PropTypes from "prop-types";
import { TextInput } from "../common/TextInput";
import { SelectInput } from "../common/SelectInput";
import { Heading } from "../../style/components/common";

export const ManageUsersForm = ({
  user,
  campaigns,
  onSave,

  onChange,
  saving,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      <Heading> {user.id ? `Rediger` : `Legg til`} Bruker </Heading>
      {errors.onSave && <div role="alert">{errors.onSave}</div>}
      <TextInput
        name="userName"
        label="userName"
        value={user.name}
        onChange={onChange}
        error={errors.title}
      />
      <TextInput
        name="userRole"
        label="userRole"
        value={user.userRole}
        onChange={oncCange}
        error={errors.title}
      />
      <SelectInput
        name="campaign"
        label="campaign"
        value={user.id || ""}
        defaultOption="Select Campaign"
        options={campaigns.map((c) => ({
          value: c.id,
          text: c.name,
        }))}
        onChange={onChange}
        error={errors.campaigns}
      />
      <TextInput
        name="team"
        label="team"
        value={user.team}
        onChange={onChange}
        error={errors.title}
      />
      <Button type="submit" disabled={saving}>
        {saving ? "Lagrer" : "Lagre"}
      </Button>
    </form>
  );
};

ManageUsersForm.propTypes = {
  users: PropTypes.array.isRequired,
  campaigns: PropTypes.array.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  saving: PropTypes.bool,
};
