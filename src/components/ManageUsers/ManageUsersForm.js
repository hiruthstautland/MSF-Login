import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { TextInput } from "../common/TextInput";
import { AutocompleteList } from "../common/AutoCompleteList";
import { Heading, Button, ButtonContainer } from "../../style/_common";
import { FormContainer, FlexContainer } from "./_style";

export const ManageUsersForm = ({
  user,
  campaigns,
  onSave,
  onChange,
  saving,
  showSuggestions,
  errors = {},
}) => {
  //TODO: add user value validation
  const campaings = useState();
  const campaingRef = useRef("");

  const availableCampaigns = campaigns.map((campaign) => campaign.name);
  console.log(availableCampaigns.length);

  console.log(campaingRef.current.value);
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
          onChange={onChange}
          error={errors.title}
        />
        <TextInput
          name="userRole"
          label="Rolle"
          placeholder={user.userRole || "Rolle"}
          value={user.userRole}
          onChange={onChange}
          error={errors.title}
        />
        <TextInput
          ref={campaingRef}
          name="campaigns"
          label="Kampanjer"
          placeholder={"Kampanjer"}
          value={user.campaigns}
          onChange={onChange}
          error={errors.title}
        />
        {showSuggestions && (
          <AutocompleteList
            // suggestion={suggestion}
            suggestions={availableCampaigns}
            userInput={campaingRef.current.value}
            // onSelectSuggestion={onSelectSuggestion}
          />
        )}

        {/* <SelectInput
          name="campaign"
          label="campaign"
          value={user.campaigns || ""}
          defaultOption="Velg Kampanje"
          options={campaigns.map((c) => ({
            value: c.id,
            text: c.name,
          }))}
          onChange={onChange}
          error={errors.campaigns}
        /> */}
        <TextInput
          name="team"
          label="Team"
          placeholder={user.team || "Team"}
          value={user.team}
          onChange={onChange}
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
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  saving: PropTypes.bool,
};
