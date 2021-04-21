import { colors, spaces, weights } from '@/shared/design';

function ButtonBase ({ label, ...rest }) {
  const { primary, light, secondary } = colors;
  const { breathable, spacious } = spaces;
  return (
    <button
      css={{
        borderRadius: breathable,
        padding: `${breathable} ${spacious}`,
        backgroundColor: primary,
        ':hover': {
          backgroundColor: light
        },
        color: secondary,
        fontWeight: weights.bold,
        cursor: 'pointer'
      }}
      type='button'
      {...rest}
    >
      { label }
    </button>
  );
}

export { ButtonBase };
