import React from "react";
import PropTypes from "prop-types";
import { TextInput } from "../common/TextInput";
import { Heading, Button, ButtonContainer } from "../../style/_common";
import { FormContainer, FlexContainer } from "./_style";

export const ManageUsersForm = ({
  user,
  campaigns,
  onSave,
  saving,
  updateUser,
  errors = {},
}) => {
  //TODO: add user value validation

  const availableCampaigns = campaigns.map((campaign) => campaign.name);

  return (
    <FlexContainer>
      <Heading> {user.id ? `Rediger` : `Legg til`} Bruker </Heading>
      <FormContainer onSubmit={onSave}>
        {errors.onSave && <div role="alert">{errors.onSave}</div>}
        <TextInput
          name="name"
          label="Navn"
          placeholder={user.name || "Brukernavn"}
          value={user.name}
          error={errors.title}
          updateUser={updateUser}
        />
        <TextInput
          name="userRole"
          label="Rolle"
          placeholder={user.userRole || "Rolle"}
          value={user.userRole}
          error={errors.title}
          updateUser={updateUser}
        />
        <TextInput
          name="campaigns"
          label="Kampanjer"
          placeholder={"Kampanjer"}
          value={user.campaigns}
          error={errors.title}
          updateUser={updateUser}
          availableSuggestions={availableCampaigns}
        />

        {/* <SelectInput
         
          defaultOption="Velg Kampanje"
          options={campaigns.map((c) => ({
            value: c.id,
            text: c.name,
          }))}

        /> */}
        <TextInput
          name="team"
          label="Team"
          placeholder={user.team || "Team"}
          updateUser={updateUser}
          value={user.team}
          error={errors.title}
        />
        <ButtonContainer>
          <Button type="submit" disabled={saving}>
            {saving ? "Lagrer" : "Lagre"}
          </Button>
        </ButtonContainer>
      </FormContainer>
    </FlexContainer>
  );
};

ManageUsersForm.propTypes = {
  user: PropTypes.object.isRequired,
  campaigns: PropTypes.array.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  value: PropTypes.string,
  saving: PropTypes.bool,
};
