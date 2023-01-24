import React, { useState } from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import { restoreState, saveState } from './localStorage/localStorage'
import s2 from '../../s1-main/App.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s from './HW6.module.css'

/*
 * 1 - в файле SuperEditableSpan.tsx дописать логику функций onEnterCallback, onBlurCallback, onDoubleClickCallBack
 * 2 - дописать логику функции restore
 * 3 - сделать стили в соответствии с дизайном
 */

const HW6 = () => {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('hw6-editable-span-value', value)
    }
    const restore = () => {
        let valueString = localStorage.getItem("hw6-editable-span-value")
        if(valueString) {
            let newValue = JSON.parse(valueString)
            setValue(newValue)
        }

    }

    return (
        <div id={'hw6'}>
            <div className={s2.hwTitle}>Homework #6</div>

            {/*демонстрация возможностей компоненты:*/}
            <div className={s2.hw}>
                <div className={s.editableSpanContainer}>
                    <SuperEditableSpan
                        id={'hw6-spanable-input'}
                        value={value}
                        onChangeText={setValue}
                        spanProps={{
                            id: 'hw6-editable-span',
                            defaultText: 'enter text...',
                        }}
                    />
                </div>

                <div className={s.buttonsContainer}>
                    <SuperButton
                        id={'hw6-save'}
                        onClick={save}
                        style={{width: "116px"}}
                    >
                        Save to ls
                    </SuperButton>
                    <SuperButton
                        id={'hw6-restore'}
                        onClick={restore}
                        xType={'secondary'}
                        style={{width: "129px", marginLeft: "24px"}}
                    >
                        Get from ls
                    </SuperButton>
                </div>
            </div>
        </div>
    )
}

export default HW6
