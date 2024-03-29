import * as React from 'react';

import { Box, Flex, Typography } from '@strapi/design-system';
import { type MessageDescriptor, useIntl } from 'react-intl';
import styled from 'styled-components';

import { Hint, HintProps } from '../Hint';

import { BlocksEditor } from './BlocksEditor';

const LabelAction = styled(Box)`
  svg path {
    fill: ${({ theme }) => theme.colors.neutral500};
  }
`;

interface BlocksInputProps
  extends Omit<React.ComponentPropsWithoutRef<typeof BlocksEditor>, 'placeholder'>,
    Pick<HintProps, 'hint'> {
  intlLabel: MessageDescriptor;
  attribute: { type: string; [key: string]: unknown };
  placeholder?: MessageDescriptor;
  description?: MessageDescriptor;
  labelAction?: React.ReactNode;
  required?: boolean;
  /** KLAMMERZU */
  currentLocale: string;
  onDataChange: (value: unknown) => void;
  /** KLAMMERZU */
}

const BlocksInput = React.forwardRef<{ focus: () => void }, BlocksInputProps>(
  (
    {
      intlLabel,
      labelAction,
      name,
      required = false,
      error = '',
      hint,
      placeholder,
      value,
      currentLocale,
      onDataChange,
      ...editorProps
    },
    forwardedRef
  ) => {
    const { formatMessage } = useIntl();
    const uniqueId = React.useId();
    const label = intlLabel.id ? formatMessage(intlLabel) : name;
    const formattedPlaceholder =
      placeholder &&
      formatMessage({ id: placeholder.id, defaultMessage: placeholder.defaultMessage });

    return (
      <>
        <Flex direction="column" alignItems="stretch" gap={1}>
          <BlocksEditor
            name={name}
            error={error}
            ref={forwardedRef}
            {...editorProps}
            ariaLabelId={uniqueId}
            placeholder={formattedPlaceholder}
            value={value}
            /** KLAMMERZU */
            currentLocale={currentLocale}
            onDataChange={onDataChange}
            /** KLAMMERZU */
          />
          <Hint hint={hint} name={name} error={error} />
        </Flex>
        {error && (
          <Box paddingTop={1}>
            <Typography variant="pi" textColor="danger600" data-strapi-field-error>
              {error}
            </Typography>
          </Box>
        )}
      </>
    );
  }
);

export { BlocksInput };
