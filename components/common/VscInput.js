export const VscInput = () => {
    return (
        <>
            Hello
        </>
    )
};

import styled from 'styled-components';
import { clsx } from 'clsx';


import FvcIconButton from '../../FvcIconButton/FvcIconButton';

import './FvcFormInput.scss';

type Props = {
    /**
     * Type of the input. `text`, `number`, `search`, `email` and `password`
     */
    type?: 'text' | 'number' | 'search' | 'email' | 'password',
    /**
     * Size of the component. `large`, `medium` and `small`
     */
    size?: 'large' | 'medium' | 'small',
    /**
     * Shape of the component. `box`, `rounded`
     */
    shape?: 'box' | 'rounded',
    /**
     * Custom class name for the input
     */
    className?: string,
    /**
     * Name for the input
     */
    name?: string | number,
    /**
     * Title for the element
     */
    title?: string | number,
    /**
     * If set to `true`, disables the input
     */
    disabled?: boolean,
    /**
     * If set to `true`, sets the input
     */
    readOnly?: boolean,
    /**
     * Value to set to the input
     */
    value?: string | number,
    /**
     * Function to trigger on value change
     */
    onChange?: Function,
    /**
     * Function to trigger on key down
     */
    onKeyDown?: Function,
    /**
     * Function to trigger on blurring the input
     */
    onBlur?: Function,
    /**
     * Function to trigger on focusing the input
     */
    onFocus?: Function,
    /**
     * Custom style for the input
     */
    style?: any,
    /**
     * Minimum value for the input
     */
    min?: string | number,
    /**
     * Maximum value for the input
     */
    max?: string | number,
    /**
     * Auto-capitalizing modes for the input. `off`, `none`, `on`, `sentences`, `words` and `characters`
     */
    autoCapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters',
    /**
     * Auto-completion for the input
     */
    autoComplete?: string,
    /**
     * Auto-correction for the input
     */
    autoCorrect?: string,
    /**
     * Auto-focus for the input
     */
    autoFocus?: string,
    /**
     * If set to `true`, enables spelling check for the input
     */
    spellcheck?: boolean,
    /**
     * If set to `true`, does not show the number spinners when type is set to `number`
     */
    noSpinner?: boolean,
    /**
     * Placeholder text for the input
     */
    placeholder?: string,
    /**
     * If set to `true`, renders a password visibility toggle button when type is `password`
     */
    passwordVisibilityIcon?: boolean,
    /**
     * Amount of steps to increase when type is `number`
     */
    step?: Number,
    invalid?: boolean,
    overrides?: Object,
};

const FvcFormInputSC = React.memo(styled.input`
    background-color: ${(props) => props.theme.form.formInput.default.backgroundColor};
    //outline-color: ${(props) => props.theme.form.formInput.default.borderColor};
    color: ${(props) => props.theme.form.formInput.default.color};
    box-shadow: ${(props) => props.theme.form.formInput.default.boxShadow};

    ::-webkit-input-placeholder, ::-moz-placeholder, ::-ms-input-placeholder, ::placeholder {
        color: ${(props) => props.theme.form.formInput.default.placeholder.color};
        opacity: 1;
    }

    :focus:not(:disabled) {
        background-color: ${(props) => props.theme.form.formInput.focus.backgroundColor};
        //outline-color: ${(props) => props.theme.form.formInput.focus.borderColor};
        color: ${(props) => props.theme.form.formInput.focus.color};
        box-shadow: ${(props) => props.theme.form.formInput.focus.boxShadow};
    }

    &.error {
        background-color: ${(props) => props.theme.form.formInput.error.backgroundColor};
        //outline-color: ${(props) => props.theme.form.formInput.error.borderColor};
        color: ${(props) => props.theme.form.formInput.error.color};
        box-shadow: ${(props) => props.theme.form.formInput.error.boxShadow};
    }

    :disabled {
        background-color: ${(props) => props.theme.form.formInput.disabled.backgroundColor};
        //outline-color: ${(props) => props.theme.form.formInput.disabled.borderColor};
        color: ${(props) => props.theme.form.formInput.disabled.color};
        box-shadow: ${(props) => props.theme.form.formInput.disabled.boxShadow};
    }
`);

/**
 * Form Input component
 * @visibleName FvcFormInput
 * @version 1.0.0
 */
const FvcFormInput = React.forwardRef((props: Props, ref) => {
    const {
        className,
        name,
        type,
        size,
        shape,
        title,
        disabled,
        onChange,
        style,
        value,
        onKeyDown,
        min,
        max,
        autoCapitalize,
        autoComplete,
        autoCorrect,
        autoFocus,
        spellcheck,
        noSpinner,
        onBlur,
        onFocus,
        placeholder,
        passwordVisibilityIcon,
        step,
        invalid,
        tabIndex,
        readOnly,
        overrides = {},
    } = props;
    const [showPassword, setPasswordVisibility] = React.useState(false);
    const [valueBeforeFocus, setValueBeforeFocus] = React.useState('');
    const passwordInputRef = React.useRef();

    const togglePasswordVisibility = () => {
        setPasswordVisibility(!showPassword);
        passwordInputRef.current.focus();
        setTimeout(() => {
            passwordInputRef.current.setSelectionRange(-1, -1);
        });
    };

    const onInputFocus = (e) => {
        setValueBeforeFocus(value);
        if (onFocus) {
            onFocus(e, valueBeforeFocus);
        }
    };

    const onInputBlur = (e) => {
        if (onBlur) {
            onBlur(e, valueBeforeFocus, name);
        }
        setValueBeforeFocus('');
    };


    return (
        <FvcFormInputSC
            ref={ref}
            className={clsx('fvc-form-input', size, className, { error: invalid, 'no-spinner': noSpinner })}
            shape={shape}
            type={type === 'password' && passwordVisibilityIcon ? (showPassword ? 'text' : type) : type}
            title={title}
            disabled={disabled}
            style={style}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onBlur={onInputBlur}
            onFocus={onInputFocus}
            min={min}
            max={max}
            readOnly={readOnly}
            autoCapitalize={autoCapitalize}
            autoComplete={autoComplete}
            autoCorrect={autoCorrect}
            autoFocus={autoFocus}
            spellcheck={spellcheck}
            placeholder={placeholder}
            step={step}
            tabIndex={tabIndex}
            {...overrides}
        />
    );
});

FvcFormInput.defaultProps = {
    autoCapitalize: undefined,
    autoFocus: undefined,
    autoComplete: 'off',
    spellcheck: undefined,
    passwordVisibilityIcon: true,
    size: 'large',
};

FvcFormInput.displayName = 'FvcFormInput';

export default React.memo(FvcFormInput);
