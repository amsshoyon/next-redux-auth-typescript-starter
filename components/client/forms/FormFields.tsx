import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import React, { useState } from 'react'

interface PasswordProps {
    name: string,
    value: string,
    error?: boolean,
    helperText?: string,
    label?: string,
    [x: string]: any,
    onChange: Function
}

export const PasswordField = ({ name, label = 'Password', value, error, helperText, onChange, ...rest }: PasswordProps) => {
    const [visibility, setVisibility] = useState(false)

    return (
        <FormControl variant="outlined" fullWidth {...rest}>
            <InputLabel>{label}</InputLabel>
            <OutlinedInput
                value={value}
                name={name}
                type={visibility ? 'text' : 'password'}
                error={error}
                onChange={event => onChange(event)}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={() => setVisibility(!visibility)}
                            edge="end"
                        >
                            {visibility ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label={label}
            />
            {error && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    )
}
