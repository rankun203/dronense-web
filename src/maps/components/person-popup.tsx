import React from 'react';
import _get from 'lodash/get';
import styled from 'styled-components';
import { IPopupProps } from './interfaces/i-popup-props';
import { Feature, Point } from 'geojson';
import { IPersonProperties } from '../crews/interfaces/i-crew-member';

const PopupDiv = styled.div`
  width: 300px;
`;

const FieldContainer = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  width: calc(100% - 24px);
  height: 100%;
`;

const PersonBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Avatar = styled.div`
  display: flex;
  width: 100%;
  height: 260px;
  background-size: cover;
  background-position: center center;
`;

const AvatarContent = styled.div`
  width: 100%;
  height: 62px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0));
  align-self: flex-end;
  color: #fff;
`;

const Name = styled.h2`
  margin: 0;
  font-size: 1.3em;
`;

const HealthStatus = styled.h4`
  margin: 0;
  font-size: 1em;
  &::before {
    content: '';
    display: inline-block;
    width: 0.55em;
    height: 0.55em;
    margin-right: 4px;
    border-radius: 50%;
    border: 1px solid #fff;
    background-color: ${(props: IPersonPopupProps) =>
      props.healthStatus === 'healthy' ? '#0f0' : '#ca0'};
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 37px;
  box-shadow: inset 0 -1px rgba(0, 0, 0, 0.1);

  & > span {
    line-height: 150%;
    display: flex;
    align-items: center;
  }
`;

const FieldKey = styled.span``;

const FieldValue = styled.span``;

export type TPopupData = Feature<Point, IPersonProperties>;

export interface IPersonPopupProps {
  healthStatus?: 'healthy' | string;
}

export const PersonPopup: React.FC<IPopupProps<TPopupData>> = props => {
  const name = _get(props, 'data.properties.name', 'Unknown Name');
  const crew = _get(props, 'data.properties.crew.name', 'Unknown Crew');
  const healthStatus = _get(props, 'data.properties.healthStatus', 'Unknown');
  const movingSpeed = _get(props, 'data.properties.movingSpeed', 0);
  const movingDirection = _get(props, 'data.properties.movingDirection', 0);

  return (
    <PopupDiv>
      <Avatar
        style={{
          backgroundImage:
            'url(https://hkls.oss-cn-hongkong.aliyuncs.com/dronense/assets/fire-fighter-1.jpg)'
        }}
      >
        <AvatarContent>
          <FieldContainer>
            <PersonBar>
              <Name>${name}</Name>
              <HealthStatus>${healthStatus}</HealthStatus>
            </PersonBar>
          </FieldContainer>
        </AvatarContent>
      </Avatar>
      <FieldContainer>
        <Field>
          <FieldKey>Crew</FieldKey>
          <FieldValue>{crew}</FieldValue>
        </Field>
        <Field>
          <FieldKey>Moving Speed</FieldKey>
          <FieldValue>{movingSpeed}m/s</FieldValue>
        </Field>
        <Field>
          <FieldKey>Moving Direction</FieldKey>
          <FieldValue>{movingDirection}°</FieldValue>
        </Field>
      </FieldContainer>
    </PopupDiv>
  );
};
