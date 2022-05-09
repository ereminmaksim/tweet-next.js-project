import React, {ChangeEvent, useState} from 'react';
import SearchIcon from "./SearchIcon";

const styles = {
    main: `flex space-x-2 p-5`,
    avatarIcon: `mt-4 h-14 w-14 object-cover p-2
    rounded-full`,
    btn: `bg-twitter text-white rounded-full px-5 py-2
    font-bold disabled:opacity-40`,
    wrap_form: `flex flex-1 items-center pl-2`,
    form: `flex flex-1 flex-col`,
    form__input: `h-24 w-full text-xl outline-none
    placeholder:text-xl`,
    form__wrap__btnInput: `flex items-center`
}


function TweetBox() {
    const [input, setInput] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value)
    }

    return (
        <div className={styles.main}>
            <img className={styles.avatarIcon} src="https://links.papareact.com/gll" alt="tweetBox"/>


            <div className={styles.wrap_form}>
                <form className={styles.form}>
                    <input
                        value={input}
                        onChange={handleChange}
                        type="text" className={styles.form__input}
                        placeholder="What`s Happened"/>
                    <div className={styles.form__wrap__btnInput}>
                        {/*<Icons>*/}
                        <SearchIcon/>
                        <button
                            disabled={!input}
                            className={styles.btn}>Tweet</button>
                    </div>
                </form>

            </div>

        </div>
    );
}

export default TweetBox;