import React from 'react';
import { Text, Image, ImageSourcePropType } from 'react-native';

type TitleProps = {
  date?: string;
  title?: string;
  imgsrc?: ImageSourcePropType;
};

export const Title = ({
  date,
  title,
  imgsrc,
}: TitleProps) => {
  return (
    <>
      {date ? (
        <Text style={{ fontSize: 10, color: '#999', marginBottom: 7 }}>
          Date of the genesis block :{' '}
          {new Date(1230980400000).toLocaleDateString()}
        </Text>
      ) : (
        <></>
      )}
      {title ? (
        <Text
          style={{
            color: '#00b48b',
          }}
        >
          title
        </Text>
      ) : (
        <></>
      )}

      {imgsrc ? (
        <Image source={imgsrc} style={{ width: 48, height: 48 }} />
      ) : (
        <></>
      )}
    </>
  );
};
