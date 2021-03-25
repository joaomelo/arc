import { colors } from '@/shared/design';
import { ButtonBase } from './button-base';

export const ButtonPrimary = (props) => {
  const { primary, secondary, accent } = colors;
  return (
    <ButtonBase
      css={{
        backgroundColor: secondary,
        ':hover': {
          backgroundColor: accent
        },
        color: primary
      }}
      {...props}
    />
  );
};
